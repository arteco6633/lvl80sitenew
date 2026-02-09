export function FooterSection() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__columns">
          <div>
            <h3>Контакты</h3>
            <p><a href="tel:+79664458595">8&nbsp;966&nbsp;445&nbsp;85&nbsp;95</a></p>
            <p>email: info.apex@bk.ru</p>
          </div>
          <div>
            <h3>О нас</h3>
            <p>О нас</p>
            <p>Тарифы</p>
            <p>Проекты</p>
          </div>
        </div>
        <div className="footer__icons" aria-hidden>
          <img src="/icon-play.svg" alt="" width={29} height={20} loading="lazy" />
          <img src="/icon-instagram.svg" alt="" width={26} height={24} loading="lazy" />
          <img src="/icon-send.svg" alt="" width={32} height={28} loading="lazy" />
        </div>
        <div className="footer__bottom">
          Все права защищены © 2026
        </div>
        <img src="/Apps.svg" alt="" className="footer__apps-icon" aria-hidden loading="lazy" />
      </div>
    </footer>
  )
}
