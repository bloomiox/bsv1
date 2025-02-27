import { useEffect } from "react";

const ContactForm = () => {
  useEffect(() => {
    const container = document.getElementById("b24-form-container");
    if (container) {
      const script = document.createElement("script");
      script.src = "https://office.bloom.ba/upload/crm/form/loader_30_4049r1.js";
      script.async = true;
      script.setAttribute("data-b24-form", "inline/30/4049r1");
      script.setAttribute("data-skip-moving", "true");
      container.appendChild(script);

      return () => {
        if (container.contains(script)) {
          container.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
      <div id="b24-form-container" className="w-full min-h-[400px]"></div>
    </div>
  );
};

export default ContactForm;