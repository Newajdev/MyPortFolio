import { useEffect, useMemo, useRef, useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import {
  categoryIconPresets,
  iconCatalog,
  iconGroups,
  resolveIcon,
} from "../../utils/resolveIcon";

const IconPicker = ({
  label,
  value,
  onChange,
  hint,
  presets,
  compact = false,
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [group, setGroup] = useState("All");
  const wrapperRef = useRef(null);
  const SelectedIcon = resolveIcon(value);

  const filteredIcons = useMemo(() => {
    const query = search.trim().toLowerCase();

    return iconCatalog.filter((item) => {
      const matchesGroup = group === "All" || item.group === group;
      const matchesSearch =
        !query ||
        item.label.toLowerCase().includes(query) ||
        item.id.toLowerCase().includes(query) ||
        item.keywords.some((keyword) => keyword.includes(query));

      return matchesGroup && matchesSearch;
    });
  }, [group, search]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (iconId) => {
    onChange(iconId);
    setOpen(false);
    setSearch("");
  };

  const quickPresets = presets ?? categoryIconPresets;

  return (
    <div ref={wrapperRef} className="relative">
      {label && <span className="mb-2 block text-sm text-text-muted">{label}</span>}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 text-left transition hover:border-accent/30 hover:bg-accent/5 ${
          compact ? "px-3 py-2" : "px-4 py-3"
        }`}
      >
        <span className="inline-flex rounded-xl border border-white/10 bg-bg-elevated p-2.5 text-accent">
          <SelectedIcon className={compact ? "text-base" : "text-xl"} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-medium text-white">
            {iconCatalog.find((item) => item.id === value)?.label ?? "Choose an icon"}
          </span>
          {!compact && (
            <span className="block truncate text-xs text-text-soft">
              Click to browse icons
            </span>
          )}
        </span>
        <FiChevronDown className={`shrink-0 text-text-soft transition ${open ? "rotate-180" : ""}`} />
      </button>

      {hint && <p className="mt-1 text-xs text-text-soft">{hint}</p>}

      {open && (
        <div className="absolute z-30 mt-2 w-full min-w-[280px] rounded-2xl border border-white/10 bg-[#101820] p-4 shadow-2xl md:min-w-[360px]">
          {quickPresets.length > 0 && (
            <div className="mb-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-soft">
                Quick picks
              </p>
              <div className="flex flex-wrap gap-2">
                {quickPresets.map((preset) => {
                  const PresetIcon = resolveIcon(preset.id);
                  const active = value === preset.id;

                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleSelect(preset.id)}
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition ${
                        active
                          ? "border-accent/40 bg-accent/10 text-white"
                          : "border-white/10 text-text-muted hover:border-white/20 hover:text-white"
                      }`}
                    >
                      <PresetIcon />
                      {preset.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div className="relative mb-3">
            <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-soft" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search React, Docker, AWS..."
              className="dashboard-input pl-10"
            />
          </div>

          <div className="mb-3 flex flex-wrap gap-2">
            {iconGroups.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setGroup(item)}
                className={`rounded-full px-3 py-1 text-xs transition ${
                  group === item
                    ? "bg-[#2B9C7F] text-white"
                    : "bg-white/5 text-text-muted hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid max-h-56 grid-cols-4 gap-2 overflow-y-auto sm:grid-cols-5">
            {filteredIcons.map((item) => {
              const ItemIcon = resolveIcon(item.id);
              const active = value === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  title={item.label}
                  onClick={() => handleSelect(item.id)}
                  className={`flex flex-col items-center gap-1 rounded-xl border p-2 transition ${
                    active
                      ? "border-accent/40 bg-accent/10 text-white"
                      : "border-white/8 bg-white/3 text-text-muted hover:border-accent/20 hover:text-white"
                  }`}
                >
                  <ItemIcon className="text-lg" />
                  <span className="line-clamp-2 text-center text-[10px] leading-tight">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {filteredIcons.length === 0 && (
            <p className="py-6 text-center text-sm text-text-soft">No icons found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default IconPicker;
