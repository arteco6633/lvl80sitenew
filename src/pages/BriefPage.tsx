import { useRef, useState } from "react"
import {
  Building2,
  Target,
  Users,
  GitCompare,
  LayoutGrid,
  Settings,
  Palette,
  FileText,
  Search,
  Calendar,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Minus,
  Plus,
} from "lucide-react"
import html2pdf from "html2pdf.js"
import "../styles/brief.css"

export function BriefPage() {
  const briefContentRef = useRef<HTMLDivElement>(null)

  const handleDownloadPdf = () => {
    const el = briefContentRef.current
    if (!el) return
    const clone = el.cloneNode(true) as HTMLElement
    const urlPattern = /^https?:\/\/[^\s]+/i
    clone.querySelectorAll("input[type='text'], input:not([type])").forEach((input) => {
      const val = (input as HTMLInputElement).value?.trim()
      if (val && urlPattern.test(val)) {
        const a = document.createElement("a")
        a.href = val
        a.target = "_blank"
        a.rel = "noopener noreferrer"
        a.textContent = val
        a.style.color = "#ff5c10"
        a.style.textDecoration = "underline"
        input.parentNode?.replaceChild(a, input)
      }
    })
    html2pdf()
      .set({
        margin: [10, 10, 10, 10] as [number, number, number, number],
        filename: "brief-lvl80.pdf",
        image: { type: "jpeg", quality: 0.95 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        enableLinks: true,
      })
      .from(clone)
      .save()
  }

  return (
    <main className="brief-page">
      <div className="brief-page__inner">
        <div ref={briefContentRef} className="brief-pdf-source">
        <header className="brief-header">
          <h1 className="brief-header__title">Бриф для клиента</h1>
          <p className="brief-header__subtitle">
            (для подготовки Технического задания)
          </p>
          <div className="brief-header__notice">
            <AlertCircle size={20} aria-hidden />
            <p>
              Заполнение брифа является обязательным этапом перед началом работ.
              Информация, не указанная в брифе, не считается согласованной и не
              входит в объём работ, если иное не зафиксировано в ТЗ.
            </p>
          </div>
        </header>

        <form className="brief-form">
          <BriefSection
            icon={<Building2 size={24} />}
            num={1}
            title="Общая информация о компании"
            items={[
              "Название компании / бренда",
              "Сфера деятельности",
              "Регион работы (город / страна)",
              "Сайт (если есть)",
              "Соцсети / другие ресурсы",
            ]}
          />

          <BriefSection
            icon={<Target size={24} />}
            num={2}
            title="Цель сайта (ключевой блок)"
            hint="Отметьте одну основную цель:"
            notice="Всё, что не относится к выбранной цели, может быть исключено из проекта."
            radioOptions={[
              "Презентация компании",
              "Привлечение заявок",
              "Продажа услуг",
              "Продажа товаров",
              "Имидж / доверие",
            ]}
            otherOption
          />

          <BriefSection
            icon={<Users size={24} />}
            num={3}
            title="Целевая аудитория"
            items={[
              "Кто ваш основной клиент? (физлица / бизнес, должность, возраст, уровень дохода)",
              "Основная проблема клиента, которую решает ваш продукт:",
              "Почему клиент должен выбрать именно вас?",
            ]}
          />

          <BriefSection
            icon={<GitCompare size={24} />}
            num={4}
            title="Конкуренты и ориентиры"
            items={[
              "Основные конкуренты (ссылки):",
              "Что нравится у конкурентов?",
              "Что не нравится и точно не нужно повторять?",
            ]}
            listItem
          />

          <BriefSection
            icon={<LayoutGrid size={24} />}
            num={5}
            title="Структура сайта (ожидания клиента)"
            hint="Отметьте нужные страницы:"
            notice="Итоговая структура фиксируется в ТЗ и может отличаться от ожиданий клиента."
            checkOptions={[
              "Главная",
              "О компании",
              "Услуги (количество: ___)",
              "Кейсы / Портфолио",
              "Отзывы",
              "Блог",
              "Контакты",
            ]}
            numberStepperOption="Услуги (количество: ___)"
            otherOption
          />

          <BriefSection
            icon={<Settings size={24} />}
            num={6}
            title="Функционал"
            hint="Отметьте нужное:"
            notice="Функционал, не указанный здесь, не включается в проект автоматически."
            checkOptions={[
              "Форма заявки",
              "Кнопки связи (мессенджеры, звонок)",
              "Онлайн-запись",
              "Интеграции (CRM, аналитика): ______",
              "Личный кабинет",
              "Онлайн-оплата",
            ]}
            otherOption
          />

          <BriefSection
            icon={<Palette size={24} />}
            num={7}
            title="Дизайн и стиль"
            items={["Примеры сайтов, которые нравятся (ссылки):"]}
            styleHint="2. Стиль:"
            radioOptions={[
              "минимализм",
              "премиум",
              "строгий",
              "яркий",
              "не знаю / доверяю Исполнителю",
            ]}
            items2={["3. Цвета / фирменный стиль (если есть):"]}
            notice="Субъективные оценки («не нравится») не являются основанием для бесконечных правок."
          />

          <BriefSection
            icon={<FileText size={24} />}
            num={8}
            title="Контент"
            hint="1. Кто предоставляет контент?"
            notice="Клиент несёт ответственность за корректность предоставленного контента."
            radioOptions={["Клиент", "Исполнитель", "Частично"]}
            contentCheckOptions={["тексты", "изображения", "логотип"]}
          />

          <BriefSection
            icon={<Search size={24} />}
            num={9}
            title="SEO и продвижение"
            hint="1. Планируется ли продвижение сайта?"
            radioOptions={["да", "нет", "не знаю"]}
            items={["2. Есть ли ключевые запросы / регионы?"]}
            notice="Позиции в поиске и заявки не гарантируются, если это не отдельная услуга."
          />

          <BriefSection
            icon={<Calendar size={24} />}
            num={10}
            title="Сроки и ограничения"
            items={[
              "Желаемые сроки запуска:",
              "Есть ли жёсткие дедлайны?",
              "Что категорически нельзя делать на сайте?",
            ]}
          />

          <BriefSection
            icon={<MessageSquare size={24} />}
            num={11}
            title="Дополнительная информация"
            hint="Любые пожелания, ожидания, ограничения, которые клиент считает важными:"
            textarea
          />

          <BriefSection
            icon={<CheckCircle2 size={24} />}
            num={12}
            title="Подтверждение"
            notice="Клиент подтверждает, что: вся предоставленная информация является актуальной; ожидания, не указанные в брифе, не считаются согласованными; бриф используется как основа для формирования ТЗ."
            signatureFields
            signatureWithoutSign
          />
        </form>
        </div>

        <div className="brief-form__submit-wrap">
          <button
            type="button"
            className="brief-form__submit"
            onClick={handleDownloadPdf}
          >
            Скачать бриф
          </button>
        </div>
      </div>
    </main>
  )
}

interface BriefSectionProps {
  icon: React.ReactNode
  num: number
  title: string
  items?: string[]
  items2?: string[]
  hint?: string
  notice?: string
  radioOptions?: string[]
  checkOptions?: string[]
  numberStepperOption?: string
  otherOption?: boolean
  listItem?: boolean
  styleHint?: string
  contentCheckOptions?: string[]
  textarea?: boolean
  signatureFields?: boolean
  signatureWithoutSign?: boolean
}

function BriefSection({
  icon,
  num,
  title,
  items = [],
  items2 = [],
  hint,
  notice,
  radioOptions = [],
  checkOptions = [],
  numberStepperOption,
  otherOption,
  listItem,
  styleHint,
  contentCheckOptions = [],
  textarea,
  signatureFields,
  signatureWithoutSign,
}: BriefSectionProps) {
  const [servicesCount, setServicesCount] = useState(1)

  return (
    <section className="brief-section">
      <div className="brief-section__divider" aria-hidden />
      <div className="brief-section__header">
        <span className="brief-section__icon" aria-hidden>
          {icon}
        </span>
        <div>
          <span className="brief-section__num">{String(num).padStart(2, "0")}</span>
          <h2 className="brief-section__title">{title}</h2>
        </div>
      </div>

      {hint && <p className="brief-section__hint">{hint}</p>}

      {radioOptions.length > 0 && !styleHint && (
        <div className="brief-section__options">
          {radioOptions.map((opt) => (
            <label key={opt} className="brief-section__radio">
              <input type="radio" name={`brief-${num}`} />
              <span>{opt}</span>
            </label>
          ))}
          {otherOption && (
            <label className="brief-section__radio brief-section__radio--other">
              <input type="radio" name={`brief-${num}`} />
              <span>Другое: </span>
              <input type="text" className="brief-section__input-inline" />
            </label>
          )}
        </div>
      )}

      {checkOptions.length > 0 && (
        <div className="brief-section__options brief-section__options--check">
          {checkOptions.map((opt) =>
            opt === numberStepperOption ? (
              <div key={opt} className="brief-section__check brief-section__check--stepper">
                <label className="brief-section__check">
                  <input type="checkbox" />
                  <span>Услуги</span>
                </label>
                <div className="brief-section__number-stepper">
                  <button
                    type="button"
                    aria-label="Уменьшить"
                    onClick={() => setServicesCount((n) => Math.max(0, n - 1))}
                  >
                    <Minus size={18} />
                  </button>
                  <input
                    type="number"
                    min={0}
                    max={99}
                    value={servicesCount}
                    onChange={(e) => setServicesCount(Math.max(0, Math.min(99, Number(e.target.value) || 0)))}
                    aria-label="Количество услуг"
                  />
                  <button
                    type="button"
                    aria-label="Увеличить"
                    onClick={() => setServicesCount((n) => Math.min(99, n + 1))}
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            ) : (
              <label key={opt} className="brief-section__check">
                <input type="checkbox" />
                <span>{opt}</span>
              </label>
            )
          )}
          {otherOption && (
            <label className="brief-section__check brief-section__check--other">
              <input type="checkbox" />
              <span>Другое: </span>
              <input type="text" className="brief-section__input-inline" />
            </label>
          )}
        </div>
      )}

      {contentCheckOptions.length > 0 && (
        <div className="brief-section__content-checks">
          <p className="brief-section__content-label">2. Есть ли:</p>
          {contentCheckOptions.map((opt) => (
            <label key={opt} className="brief-section__content-check">
              <span>{opt}</span>
              <span className="brief-section__yesno">
                <input type="radio" name={`brief-${num}-${opt}`} value="yes" />
                да
              </span>
              <span className="brief-section__yesno">
                <input type="radio" name={`brief-${num}-${opt}`} value="no" />
                нет
              </span>
            </label>
          ))}
        </div>
      )}

      {items.length > 0 && (
        <div className="brief-section__items">
          {items.map((item, i) => (
            <div key={i} className="brief-section__item">
              {listItem && i === 0 ? (
                <>
                  <span className="brief-section__item-label">{item}</span>
                  <ul className="brief-section__list">
                    <li>
                      <input type="text" />
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <label className="brief-section__item-label">{item}</label>
                  <input type="text" className="brief-section__input" />
                </>
              )}
            </div>
          ))}
        </div>
      )}

      {styleHint && radioOptions.length > 0 && (
        <div style={{ marginTop: "16px" }}>
          <p className="brief-section__hint">{styleHint}</p>
          <div className="brief-section__options">
            {radioOptions.map((opt) => (
              <label key={opt} className="brief-section__radio">
                <input type="radio" name={`brief-${num}-style`} />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {items2.length > 0 && (
        <div className="brief-section__items" style={{ marginTop: "16px" }}>
          {items2.map((item, i) => (
            <div key={i} className="brief-section__item">
              <label className="brief-section__item-label">{item}</label>
              <input type="text" className="brief-section__input" />
            </div>
          ))}
        </div>
      )}

      {textarea && (
        <textarea
          className="brief-section__textarea"
          rows={5}
          placeholder="Введите текст…"
        />
      )}

      {signatureFields && (
        <div className="brief-section__signature">
          <div className="brief-section__sig-row">
            <label>ФИО / Должность:</label>
            <input type="text" />
          </div>
          <div className="brief-section__sig-row">
            <label>Дата:</label>
            <input
              type="date"
              defaultValue={new Date().toISOString().slice(0, 10)}
            />
          </div>
          {!signatureWithoutSign && (
            <div className="brief-section__sig-row">
              <label>Подпись:</label>
              <input type="text" />
            </div>
          )}
        </div>
      )}

      {notice && (
        <div className="brief-section__notice">
          <AlertCircle size={18} aria-hidden />
          <p>{notice}</p>
        </div>
      )}
    </section>
  )
}
