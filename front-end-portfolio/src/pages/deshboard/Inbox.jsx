import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FiArchive, FiCheck, FiMail, FiTrash2 } from "react-icons/fi";
import { deleteMessage, fetchMessages, updateMessageStatus } from "../../services/adminService";
import DashboardPageHeader from "./DashboardPageHeader";

const statusStyles = {
  NEW: "badge-warning",
  READ: "badge-info",
  ARCHIVED: "badge-ghost",
};

const Inbox = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [busyId, setBusyId] = useState(null);

  useEffect(() => {
    fetchMessages()
      .then((data) => {
        setMessages(data);
        if (data.length > 0) setSelectedId(data[0].id);
      })
      .catch((err) => toast.error(err.message ?? "Failed to load messages"))
      .finally(() => setLoading(false));
  }, []);

  const selected = messages.find((msg) => msg.id === selectedId);

  const handleStatus = async (id, status) => {
    setBusyId(id);
    try {
      const updated = await updateMessageStatus(id, status);
      setMessages((prev) => prev.map((msg) => (msg.id === id ? updated : msg)));
      toast.success(`Marked as ${status.toLowerCase()}`);
    } catch (err) {
      toast.error(err.message ?? "Failed to update message");
    } finally {
      setBusyId(null);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this message permanently?")) return;

    setBusyId(id);
    try {
      await deleteMessage(id);
      setMessages((prev) => {
        const next = prev.filter((msg) => msg.id !== id);
        if (selectedId === id) setSelectedId(next[0]?.id ?? null);
        return next;
      });
      toast.success("Message deleted");
    } catch (err) {
      toast.error(err.message ?? "Failed to delete message");
    } finally {
      setBusyId(null);
    }
  };

  return (
    <>
      <DashboardPageHeader
        eyebrow="Inbox"
        title="Messages"
        description="Contact form submissions from your portfolio site."
      />

      {loading ? (
        <div className="flex min-h-[30vh] items-center justify-center">
          <span className="loading loading-spinner loading-lg text-[#2B9C7F]" />
        </div>
      ) : messages.length === 0 ? (
        <div className="dashboard-panel p-10 text-center">
          <FiMail className="mx-auto text-4xl text-text-soft" />
          <p className="mt-4 text-text-muted">
            No messages yet. They will appear here when someone uses the contact form.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <div className="dashboard-panel max-h-[70vh] overflow-y-auto p-3">
            {messages.map((msg) => (
              <button
                key={msg.id}
                type="button"
                onClick={() => setSelectedId(msg.id)}
                className={`mb-2 w-full rounded-2xl p-4 text-left transition ${
                  selectedId === msg.id
                    ? "border border-[#2B9C7F]/40 bg-[#2B9C7F]/15"
                    : "hover:bg-white/4"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="font-medium text-white">{msg.name}</p>
                  <span className={`badge badge-sm ${statusStyles[msg.status]}`}>{msg.status}</span>
                </div>
                <p className="mt-1 truncate text-sm text-text-muted">{msg.message}</p>
                <p className="mt-2 text-xs text-text-soft">{new Date(msg.createdAt).toLocaleString()}</p>
              </button>
            ))}
          </div>

          {selected && (
            <div className="dashboard-panel p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-white">{selected.name}</h2>
                  <a
                    href={`mailto:${selected.email}`}
                    className="mt-1 block text-[#2B9C7F] hover:text-[#7ee787]"
                  >
                    {selected.email}
                  </a>
                  {selected.phone && <p className="mt-1 text-sm text-text-muted">{selected.phone}</p>}
                  <p className="mt-2 text-xs text-text-soft">
                    {new Date(selected.createdAt).toLocaleString()}
                  </p>
                </div>
                <span className={`badge ${statusStyles[selected.status]}`}>{selected.status}</span>
              </div>

              <div className="mt-8 rounded-2xl border border-white/8 bg-black/30 p-5">
                <p className="whitespace-pre-wrap text-text-muted">{selected.message}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {selected.status !== "READ" && (
                  <button
                    type="button"
                    disabled={busyId === selected.id}
                    onClick={() => handleStatus(selected.id, "READ")}
                    className="dashboard-btn-primary btn-sm !py-2 !text-sm"
                  >
                    <FiCheck /> Mark as read
                  </button>
                )}
                {selected.status !== "ARCHIVED" && (
                  <button
                    type="button"
                    disabled={busyId === selected.id}
                    onClick={() => handleStatus(selected.id, "ARCHIVED")}
                    className="rounded-full border border-border px-4 py-2 text-sm text-white transition hover:bg-white/5"
                  >
                    <FiArchive className="mr-1 inline" /> Archive
                  </button>
                )}
                <button
                  type="button"
                  disabled={busyId === selected.id}
                  onClick={() => handleDelete(selected.id)}
                  className="rounded-full border border-red-400/30 px-4 py-2 text-sm text-red-400 transition hover:bg-red-400/10"
                >
                  <FiTrash2 className="mr-1 inline" /> Delete
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Inbox;
