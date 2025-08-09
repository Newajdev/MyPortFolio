



function ContactMe() {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);


        formData.append("access_key", "4c3e20c7-1f29-44df-8979-dd77a8f6ff22");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert("Wow so easy!");
        }else{
            alert('Somthing Wrong')
        }
    };

    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                 <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={onSubmit} className="fieldset">

                                <label className="label">Your Name</label>
                                <input type="Text" className="input" name="name" placeholder="Name" />

                                <label className="label">Email</label>
                                <input type="email" className="input" name="email" placeholder="Email" />

                                <label className="label">Your bio</label>
                                <textarea className="textarea h-24" name="message" placeholder="Bio"></textarea>
                                <div className="label">Optional</div>


                                <button className="btn btn-neutral mt-4" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactMe;