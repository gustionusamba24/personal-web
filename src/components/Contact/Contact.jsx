import ContactCard from "./ContactCard";

const contacts = [
  {
    imgSrc: `${import.meta.env.BASE_URL}/images/contact/email.svg`,
    label: "Email",
    account: "gusti2480@gmail.com",
    link: "mailto:gusti2480@gmail.com",
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}/images/contact/whatsapp.svg`,
    label: "WhatsApp",
    account: "+628994545474",
    link: "https://wa.me/628994545474",
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}/images/contact/instagram.svg`,
    label: "Instagram",
    account: "@gustiosmb",
    link: "https://www.instagram.com/gustiosmb",
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}/images/contact/github.svg`,
    label: "Github",
    account: "@gustionusamba24",
    link: "https://github.com/gustionusamba24",
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}/images/contact/linkedin.svg`,
    label: "Linkedin",
    account: "Gustio Nusamba",
    link: "https://www.linkedin.com/in/gustio-nusamba/",
  },
];

const Contact = () => {
  return (
    <div className="mt-24 grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6 lg:mt-32">
      {contacts.map(({ imgSrc, label, account, link }, key) => (
        <ContactCard
          key={key}
          imgSrc={imgSrc}
          label={label}
          account={account}
          link={link}
        />
      ))}
    </div>
  );
};

export default Contact;
