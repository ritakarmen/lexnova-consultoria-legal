const services = [
  {
    icon: "⚖️",
    title: "Derecho civil",
    text: "Contratos, obligaciones, propiedad, arrendamientos y prevención de conflictos entre particulares.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Derecho de familia",
    text: "Orientación clara para divorcio, alimentos, tenencia, régimen de visitas y acuerdos familiares.",
  },
  {
    icon: "💼",
    title: "Derecho laboral",
    text: "Consultas para trabajadores y empleadores sobre contratos, beneficios, despidos y contingencias.",
  },
  {
    icon: "🏢",
    title: "Empresas y contratos",
    text: "Constitución, revisión contractual, acuerdos comerciales y acompañamiento legal para negocios.",
  },
];

const steps = [
  ["01", "Cuéntanos tu caso", "Completa un formulario breve para entender tu situación y el tipo de orientación que necesitas."],
  ["02", "Revisión inicial", "El equipo identifica el área jurídica y organiza los puntos clave antes de la consulta."],
  ["03", "Consulta online", "Recibe orientación, alternativas y próximos pasos explicados con claridad."],
];

const faqs = [
  ["¿La primera evaluación reemplaza una asesoría legal?", "No. La evaluación inicial sirve para identificar el tipo de consulta. La asesoría formal comienza cuando se acuerda el servicio profesional."],
  ["¿Puedo atenderme desde otra ciudad?", "Sí. La propuesta está pensada para consultas online y seguimiento remoto, sin impedir reuniones presenciales cuando sean necesarias."],
  ["¿Qué documentos debo enviar?", "Solo los documentos necesarios para comprender el caso. La firma debe indicar siempre un canal seguro antes de recibir información sensible."],
  ["¿Puedo contratar solo una revisión de contrato?", "Sí. El modelo puede adaptarse a servicios puntuales, paquetes de consulta o planes mensuales para empresas."],
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <div className="container nav">
          <a className="brand" href="#inicio" aria-label="LexNova inicio">
            <span className="brandIcon">§</span>
            <span>
              <strong>LexNova</strong>
              <small>Consultoría Legal</small>
            </span>
          </a>

          <nav className="navLinks" aria-label="Navegación principal">
            <a href="#servicios">Servicios</a>
            <a href="#proceso">Cómo funciona</a>
            <a href="#equipo">Equipo</a>
            <a href="#faq">Preguntas</a>
          </nav>

          <a className="button buttonDark" href="#contacto">Agendar consulta</a>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="container heroGrid">
          <div className="heroCopy">
            <span className="eyebrow">Asesoría legal clara · Atención online</span>
            <h1>
              Decisiones legales con <span>claridad, estrategia y respaldo.</span>
            </h1>
            <p>
              Una experiencia digital para conectar personas y empresas con abogados,
              explicar opciones jurídicas con lenguaje sencillo y facilitar el seguimiento
              de cada consulta.
            </p>

            <div className="heroActions">
              <a className="button buttonPrimary" href="#contacto">Solicitar una consulta →</a>
              <a className="button buttonGhost" href="#servicios">Ver especialidades</a>
            </div>

            <div className="trust">
              <div><strong>100%</strong><span>Atención personalizada</span></div>
              <div><strong>Online</strong><span>Desde cualquier lugar</span></div>
              <div><strong>Claro</strong><span>Sin lenguaje complicado</span></div>
            </div>
          </div>

          <div className="heroVisual">
            <div className="orb orbOne" />
            <div className="orb orbTwo" />
            <div className="consultCard">
              <div className="status"><span /> Consulta legal online</div>
              <div className="avatar">LN</div>
              <h2>Tu caso merece una estrategia clara.</h2>
              <p>Revisión inicial · Videollamada · Plan de acción</p>
              <ul>
                <li>✓ Confidencialidad</li>
                <li>✓ Comunicación directa</li>
                <li>✓ Seguimiento ordenado</li>
              </ul>
            </div>
            <div className="floating floatingOne">⚖️ <span><strong>4 áreas</strong> de práctica</span></div>
            <div className="floating floatingTwo"><b>24h</b><span><strong>Respuesta</strong> referencial</span></div>
          </div>
        </div>
      </section>

      <section className="section" id="servicios">
        <div className="container">
          <div className="sectionHead">
            <div>
              <span className="eyebrow">Especialidades</span>
              <h2>Soluciones legales para momentos que importan.</h2>
            </div>
            <p>
              Una arquitectura clara para que un estudio jurídico explique sus servicios
              sin saturar al usuario de términos técnicos.
            </p>
          </div>

          <div className="serviceGrid">
            {services.map((service) => (
              <article className="serviceCard" key={service.title}>
                <div className="serviceIcon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contacto">Consultar esta área →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft" id="proceso">
        <div className="container processGrid">
          <div className="processIntro">
            <span className="eyebrow">Cómo funciona</span>
            <h2>De la consulta al próximo paso, sin perderte en el proceso.</h2>
            <p>
              La web guía al cliente desde el primer contacto hasta la consulta profesional,
              transmitiendo orden y confianza.
            </p>
            <div className="checks">
              <span>✓ Formulario inicial estructurado</span>
              <span>✓ Atención remota y adaptable</span>
              <span>✓ Experiencia pensada para móvil</span>
            </div>
          </div>

          <div className="steps">
            {steps.map(([number, title, text]) => (
              <article className="step" key={number}>
                <span className="stepNumber">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="equipo">
        <div className="container teamGrid">
          <div className="teamVisual">
            <div className="portrait portraitMain">AC</div>
            <div className="portrait portraitSecond">MR</div>
            <div className="portrait portraitThird">JV</div>
            <span className="teamBadge">Equipo multidisciplinario</span>
          </div>

          <div className="teamCopy">
            <span className="eyebrow">Equipo legal</span>
            <h2>Experiencia jurídica con una atención más humana.</h2>
            <p>
              Esta sección está diseñada para presentar abogados por especialidad,
              experiencia y enfoque de trabajo, reforzando la confianza antes de la consulta.
            </p>

            <div className="teamStats">
              <div><strong>12+</strong><span>Años de experiencia combinada</span></div>
              <div><strong>4</strong><span>Áreas de especialidad</span></div>
              <div><strong>1:1</strong><span>Atención personalizada</span></div>
            </div>

            <a className="textLink" href="#contacto">Hablar con un especialista →</a>
          </div>
        </div>
      </section>

      <section className="section faqSection" id="faq">
        <div className="container faqGrid">
          <div className="faqIntro">
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2>Antes de consultar, resolvemos lo esencial.</h2>
            <p>
              Una sección de preguntas frecuentes reduce fricción y ayuda al cliente
              a comprender cómo funciona el servicio.
            </p>
          </div>

          <div className="faqList">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}<span>+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contacto">
        <div className="container contactGrid">
          <div className="contactCopy">
            <span className="eyebrow eyebrowLight">Hablemos de tu caso</span>
            <h2>Una consulta clara puede ser el primer paso.</h2>
            <p>
              Completa tus datos y una breve descripción. En una implementación real,
              este formulario puede conectarse con correo, WhatsApp, CRM o un sistema de citas.
            </p>
            <div className="contactPoints">
              <span>✓ Atención remota</span>
              <span>✓ Información tratada con discreción</span>
              <span>✓ Respuesta organizada por especialidad</span>
            </div>
          </div>

          <form className="form">
            <div className="fieldGrid">
              <label>Nombre completo<input name="name" placeholder="Ej. María Pérez" /></label>
              <label>Correo electrónico<input name="email" type="email" placeholder="nombre@correo.com" /></label>
            </div>
            <div className="fieldGrid">
              <label>Teléfono<input name="phone" placeholder="+51 999 999 999" /></label>
              <label>
                Área legal
                <select name="area" defaultValue="">
                  <option value="" disabled>Selecciona una opción</option>
                  <option>Derecho civil</option>
                  <option>Familia</option>
                  <option>Laboral</option>
                  <option>Empresas y contratos</option>
                </select>
              </label>
            </div>
            <label>
              Cuéntanos brevemente tu caso
              <textarea name="message" rows={5} placeholder="Describe tu consulta sin incluir información sensible innecesaria." />
            </label>
            <button className="button buttonPrimary buttonFull" type="button">Solicitar evaluación inicial</button>
            <p className="formNote">Demo de portafolio. El formulario no envía datos reales.</p>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerGrid">
          <div>
            <a className="brand brandFooter" href="#inicio">
              <span className="brandIcon">§</span>
              <span><strong>LexNova</strong><small>Consultoría Legal</small></span>
            </a>
            <p>Experiencia digital ficticia creada para demostrar desarrollo frontend con Next.js.</p>
          </div>
          <div>
            <strong>Servicios</strong>
            <a href="#servicios">Derecho civil</a>
            <a href="#servicios">Familia</a>
            <a href="#servicios">Laboral</a>
            <a href="#servicios">Empresas</a>
          </div>
          <div>
            <strong>Información</strong>
            <a href="#proceso">Cómo funciona</a>
            <a href="#equipo">Equipo</a>
            <a href="#faq">FAQ</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>

        <div className="container footerBottom">
          <span>© 2026 LexNova · Proyecto demostrativo de portafolio.</span>
          <span>Los textos no constituyen asesoría legal.</span>
        </div>
      </footer>
    </main>
  );
}
