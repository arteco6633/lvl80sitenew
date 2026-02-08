# UI-компоненты

## Используются в приложении

- **hero-1** — главный блок Hero с кнопками и карточками.
- **contact-modal** — модалка «Связаться»; внутри использует **slide-button** (framer-motion).
- **project-modal** — модалка обзора проекта.
- **button** — базовая кнопка (Tailwind, CVA).
- **slide-button** — кнопка-слайдер в модалке контактов (использует framer-motion).

## Опциональные / экспериментальные

Эти компоненты не подключены к лендингу; их можно использовать в будущем или удалить при очистке:

- **background-paths** — фон с путями (framer-motion).
- **shape-landing-hero** — декоративная форма для hero (framer-motion).
- **text-scramble** — эффект «скремблирования» текста (framer-motion).
- **shimmer-button** — кнопка с эффектом shimmer.
- **gooey-text-morphing** — морфинг текста.
- **neon-rgbtext-effect** — неоновый RGB-текст.
- **inverted-cursor** — инвертированный курсор.
- **typewriter-text** — печатная машинка.

**framer-motion** используется в slide-button (и в опциональных background-paths, shape-landing-hero, text-scramble), поэтому зависимость оставляем в `package.json`.
