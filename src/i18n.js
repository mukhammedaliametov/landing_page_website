import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "home",
        aboutme: "about me",
        skills: "skills",
        portfolio: "portfolio",
        contacts: "contacts",
        name: "Denis\nNovik",
        hero_title: "UX | UI designer\n24 years old, Minsk",
        about_info1:
          "Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and everything connected with it.",
        about_info2:
          "I'm studying at courses 'Web and mobile design interfaces' in IT-Academy.",
        about_info3:
          "Ready to implement excellent projects with wonderful people.",
        skills_info: "I work in such programs as",
        portfolio1: "Online fashion store - Homepage",
        portfolio2: "Reebok Store - Concept",
        portfolio3: "Braun Landing Page - Concept",
        footer_info: "Want to know more or just chat?\nYou are welcome!",
        button: "Send message",
        footer_end: "Like me on\nLinkedIn, Instagram, Behance, Dribbble",
      },
    },
    ru: {
      translation: {
        home: "дом",
        aboutme: "обо мне",
        skills: "навыки",
        portfolio: "портфолио",
        contacts: "контакты",
        hero_title: "UX | UI дизайнер\n24 года, Минск",
        name: "Денис\nНовик",
        about_info1:
          "Привет, меня зовут Денис, я UX/UI-дизайнер из Минска. Интересуюсь дизайном и всем, что с ним связано.",
        about_info2:
          "Обучаюсь на курсах «Дизайн веб-интерфейсов и мобильных приложений» в IT-Академия.",
        about_info3:
          "Готов реализовать отличные проекты с замечательными людьми.",
        skills_info: "Я работаю в таких программах как",
        portfolio1: "Интернет-магазин модной одежды - Главная страница",
        portfolio2: "Магазин Reebok - Концепция",
        portfolio3: "Лендинг Braun - Концепция",
        footer_info:
          "Хотите узнать больше или просто пообщаться?\nДобро пожаловать!",
        button: "Отправить сообщение",
        footer_end:
          "Подпишитесь на меня в\nLinkedIn, Instagram, Behance, Dribbble",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
