export default function Testimonials() {
  const testimonials = [
    {
      name: "Musharof Chy",
      role: "Founder @ LineIcons",
      company: "LineIcons",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue.",
      img: "/path-to-image1.jpg",
    },
    {
      name: "Devid Sailio",
      role: "Founder @ TailGrids",
      company: "TailGrids",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue.",
      img: "/path-to-image2.jpg",
    },
    {
      name: "Jenifer Lofeez",
      role: "Founder @ FormBold",
      company: "FormBold",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue.",
      img: "/path-to-image3.jpg",
    },
    {
      name: "Justin Herry",
      role: "Founder @ Uldeck",
      company: "Uldeck",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue.",
      img: "/path-to-image4.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Hear From Our Clients
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-xl border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {item.company}
              </h3>
              <p className="text-gray-600 mt-2">{item.text}</p>
              <div className="flex items-center mt-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
