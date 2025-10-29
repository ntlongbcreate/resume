"use client";

import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      alert(result.message);
      if (result.success) reset();
    } catch (err) {
      alert("Error sending mail");
    }
  };

  return (
    <section id="contact" className="contact-section pt-page">
      <div className="section-container">
        <div className="page-heading">
          <span className="icon">
            <i className="lnr lnr-envelope"></i>
          </span>
          <h2>Contact Me.</h2>
        </div>

        <div className="row mb-70">
          <div className="col-lg-8  offset-lg-2">
            <div className="subheading">
              <h3>{`Let's Talk`}</h3>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-6 mb-50">
                  <span className="input">
                    <input className="input__field" {...register("name", { required: "Name is required" })} />
                    <label className="input__label">Name</label>
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                  </span>
                </div>

                <div className="col-md-6 mb-50">
                  <span className="input">
                    <input
                      className="input__field"
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
                      })}
                    />
                    <label className="input__label">Email</label>
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                  </span>
                </div>

                <div className="col-md-12 mb-30">
                  <span className="input">
                    <textarea
                      className="input__field"
                      rows={5}
                      {...register("message", { required: "Message is required" })}
                    />
                    <label className="input__label">How can we help you?</label>
                    {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                  </span>
                </div>

                <div className="col-md-12 text-center">
                  <button type="submit" className="btn-main" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="row contact-info mb-70">
          <div className="col-md-4 info-item">
            <span className="icon">
              <i className="fas fa-paper-plane"></i>
            </span>
            <h5>
              <a href="mailto:longnt2302@gmail.com">longnt2302@gmail.com</a>
            </h5>
          </div>

          <div className="col-md-4 info-item">
            <span className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <h5>
              <a href="https://maps.app.goo.gl/YwHbUkntQFF6pRe87" target="_blank">
                118/47 Au Duong Lan Street, Chanh Hung Ward, Ho Chi Minh city, Vietnam
              </a>
            </h5>
          </div>

          <div className="col-md-4 info-item">
            <span className="icon">
              <i className="fas fa-phone"></i>
            </span>
            <h5>
              <a href="tel:+84933460208">(+84) 933 460 208</a>
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
