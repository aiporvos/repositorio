import { useState } from "react";

const apps = [
  {
    id: "influencer",
    emoji: "🎬",
    name: "AI Influencer Studio",
    tagline: "Crea tu Influencer Digital con IA Generativa",
    url: "https://influencer.aiporvos.com/",
    github: "https://github.com/aiporvos/influencer",
    promptUrl: "https://docs.google.com/document/d/12aYTQJK73zLgIqDSyLebvkfc9o8qpESn7x7t2e4p_0Y/edit?usp=drive_link",
    imagesUrl: "https://drive.google.com/drive/u/1/folders/1FDXnOlEZTufw2MF0m8Nuo1VyL_vVJQrU?usp=drive_link",
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed, #a855f7)",
    description: "Plataforma web para generar contenido multimedia de influencers digitales (imágenes y videos) usando IA generativa. El usuario sube fotos del personaje, escenario y producto, y la IA produce el contenido listo para redes sociales.",
    stack: ["HTML5 / CSS3 / JS Vanilla", "n8n (orquestación)", "GPT-4o mini (prompts)", "Nano-Banana (imágenes)", "Google Veo 3.1 (videos)", "Gmail API (notificaciones)", "Docker"],
    pasos: [
      { icon: "📸", title: "Subir Imagen del Personaje", desc: "Foto base del influencer/avatar digital." },
      { icon: "🏙️", title: "Subir Escenario", desc: "El fondo o ambiente donde aparecerá el influencer." },
      { icon: "📦", title: "Subir Imagen del Producto", desc: "El producto que el influencer va a promocionar." },
      { icon: "📧", title: "Ingresar Email", desc: "Para recibir los resultados generados." },
      { icon: "🔢", title: "Definir Cantidad", desc: "Número de imágenes y videos a generar." },
      { icon: "📐", title: "Elegir Aspecto", desc: "16:9 horizontal o 9:16 vertical (para Stories/Reels)." },
      { icon: "✍️", title: "Instrucciones Creativas", desc: "Descripción libre: tono, ambiente, mensaje." },
      { icon: "🚀", title: "Generar", desc: "El sistema procesa todo y envía los resultados al email." },
    ],
    highlights: [
      "Consistencia visual del personaje en todas las generaciones",
      "Ingeniería de prompts automatizada por GPT-4o",
      "Resultados entregados por email automáticamente",
      "Interfaz premium con Glassmorphism y animaciones fluidas",
    ],
  },
  {
    id: "rag-langchain",
    emoji: "📚",
    name: "RAG LangChain",
    tagline: "Chat con tus Documentos vía Web",
    url: "https://raglangchain.aiporvos.com/",
    github: "https://github.com/aiporvos/rag-langchain",
    color: "#0ea5e9",
    gradient: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
    description: "Aplicación web (Streamlit) que permite subir documentos propios y hacerles preguntas en lenguaje natural. Usa RAG (Retrieval Augmented Generation) with LangChain para recuperar información relevante y generar respuestas precisas.",
    stack: ["Python", "Streamlit (UI web)", "LangChain", "OpenAI / embeddings", "Vector store (Chroma/FAISS)", "Docker"],
    pasos: [
      { icon: "📄", title: "Subir Documentos", desc: "PDF, TXT u otros formatos compatibles." },
      { icon: "⚙️", title: "Procesamiento Automático", desc: "El sistema fragmenta e indexa el contenido en vectores." },
      { icon: "💬", title: "Hacer Preguntas", desc: "Chat en lenguaje natural sobre el contenido subido." },
      { icon: "🔍", title: "Recuperación Semántica", desc: "El sistema busca los fragmentos más relevantes." },
      { icon: "🤖", title: "Respuesta Generada", desc: "La IA responde citando el contexto de tus documentos." },
    ],
    highlights: [
      "Respuestas basadas exclusivamente en tus documentos",
      "Evita alucinaciones al anclar las respuestas en contexto real",
      "Interfaz conversacional simple y accesible vía web",
      "Ideal para manuales, contratos, informes, bases de conocimiento",
    ],
  },
  {
    id: "rag-whatsapp",
    emoji: "💬",
    name: "RAG WhatsApp",
    tagline: "Chat con tus Documentos vía WhatsApp",
    url: null,
    github: "https://github.com/aiporvos/rag-whatsapp",
    whatsapp: "2604846282",
    color: "#16a34a",
    gradient: "linear-gradient(135deg, #16a34a, #22c55e)",
    description: "La misma potencia del RAG LangChain pero accesible directamente desde WhatsApp. Los usuarios pueden chatear con una base de conocimiento empresarial sin necesidad de abrir ninguna app adicional.",
    stack: ["n8n (orquestación)", "LangChain / RAG", "WhatsApp API / Evolution API", "OpenAI / embeddings", "Vector store", "Redis (sesiones)"],
    pasos: [
      { icon: "📱", title: "Enviar mensaje a WhatsApp", desc: "Escribir al número: +54 2604846282" },
      { icon: "🗣️", title: "Hacer la Pregunta", desc: "Escribir en lenguaje natural lo que se necesita saber." },
      { icon: "🔍", title: "Búsqueda Semántica", desc: "El sistema busca en la base de conocimiento configurada." },
      { icon: "💡", title: "Respuesta Inmediata", desc: "WhatsApp responde con la información relevante encontrada." },
    ],
    highlights: [
      "Zero fricción para el usuario final (usa WhatsApp que ya tiene)",
      "Ideal para atención al cliente, soporte interno o FAQ",
      "Sesiones de conversación con memoria (Redis)",
      "Mismo motor RAG que la versión web, sin cambiar de app",
    ],
  },
  {
    id: "vetanco",
    emoji: "🐾",
    name: "Sistema Vetanco",
    tagline: "Atención al Cliente Automatizada por WhatsApp",
    url: null,
    github: "https://github.com/aiporvos/vetanco",
    color: "#e67e22",
    gradient: "linear-gradient(135deg, #e67e22, #f39c12)",
    description: "Sistema de atención al cliente automatizada para la empresa veterinaria Vetanco. Captura reclamos, devoluciones y consultas vía WhatsApp, los clasifica con IA de forma conversacional, los guarda en Supabase y los integra automáticamente con el sistema de tickets Loyal.",
    stack: ["Kapso (agente IA / WhatsApp)", "Supabase (base de datos + Edge Functions)", "n8n (orquestación)", "Loyal API (tickets)", "PLpgSQL / JavaScript / TypeScript / Python", "Docker"],
    pasos: [
      { icon: "📱", title: "Cliente escribe por WhatsApp", desc: "El usuario inicia la conversación con cualquier consulta o reclamo." },
      { icon: "🤖", title: "Clasificación con IA (Kapso)", desc: "El agente detecta automáticamente si es reclamo, devolución o consulta." },
      { icon: "🗣️", title: "Captura conversacional de datos", desc: "Kapso guía al usuario con preguntas para completar toda la información necesaria." },
      { icon: "🗄️", title: "Guardado en Supabase", desc: "Los datos del caso quedan registrados en la base de datos con todos los detalles." },
      { icon: "⚙️", title: "N8N procesa el evento", desc: "Un workflow n8n detecta el nuevo registro y orquesta las acciones siguientes." },
      { icon: "🎫", title: "Ticket creado en Loyal", desc: "Se genera automáticamente el reclamo formal en el sistema de gestión Loyal." },
      { icon: "🔔", title: "Notificaciones", desc: "El equipo recibe alerta por Slack y/o email con el resumen del caso." },
    ],
    highlights: [
      "Flujo 100% automatizado: WhatsApp → IA → BD → Ticket → Notificación",
      "Clasificación inteligente sin intervención humana en la captura",
      "Integración directa con sistema de gestión Loyal vía API",
      "Arquitectura documentada con 7 módulos técnicos detallados",
    ],
    architecture: "WhatsApp → Kapso (IA) → Supabase (BD) → N8N → Loyal / Slack / Email",
  },
];

const accentColor = (app: any) => {
  if (app.color === "#16a34a") return "#4ade80";
  if (app.color === "#0ea5e9") return "#38bdf8";
  if (app.color === "#e67e22") return "#fbbf24";
  return "#c084fc";
};

export default function App() {
  const [active, setActive] = useState(0);
  const app = apps[active];
  const accent = accentColor(app);

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#0f172a", minHeight: "100vh", color: "#e2e8f0" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #1e293b, #0f172a)", borderBottom: "1px solid #334155", padding: "20px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontSize: 13, color: "#94a3b8", marginBottom: 4, letterSpacing: 2, textTransform: "uppercase" }}>AIPORVOS</div>
          <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "#f1f5f9" }}>Portafolio de Aplicaciones IA</h1>
          <p style={{ margin: "6px 0 0", fontSize: 13, color: "#64748b" }}>4 soluciones productivas en producción</p>
        </div>
      </div>

      {/* Tab selector */}
      <div style={{ background: "#1e293b", borderBottom: "1px solid #334155", overflowX: "auto" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", gap: 0, minWidth: "max-content" }}>
          {apps.map((a, i) => (
            <button
              key={a.id}
              onClick={() => setActive(i)}
              style={{
                background: active === i ? "#0f172a" : "transparent",
                border: "none",
                borderBottom: active === i ? `2px solid ${a.color}` : "2px solid transparent",
                color: active === i ? "#f1f5f9" : "#64748b",
                padding: "14px 18px",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: active === i ? 600 : 400,
                display: "flex",
                alignItems: "center",
                gap: 8,
                transition: "all 0.2s",
                whiteSpace: "nowrap",
                outline: "none"
              }}
            >
              <span style={{ fontSize: 16 }}>{a.emoji}</span>
              <span>{a.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 16px" }}>
        {/* Hero card */}
        <div style={{
          background: app.gradient,
          borderRadius: 16,
          padding: "28px 28px 24px",
          marginBottom: 20,
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", right: -20, top: -20, fontSize: 120, opacity: 0.1 }}>{app.emoji}</div>
          <div style={{ fontSize: 36, marginBottom: 8 }}>{app.emoji}</div>
          <h2 style={{ margin: "0 0 6px", fontSize: 24, fontWeight: 700, color: "#fff" }}>{app.name}</h2>
          <p style={{ margin: "0 0 16px", fontSize: 15, color: "rgba(255,255,255,0.85)" }}>{app.tagline}</p>
          <p style={{ margin: "0 0 20px", fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>{app.description}</p>

          {/* Architecture badge for Vetanco */}
          {(app as any).architecture && (
            <div style={{
              background: "rgba(0,0,0,0.25)", borderRadius: 8, padding: "8px 14px",
              fontSize: 12, color: "rgba(255,255,255,0.9)", marginBottom: 16,
              fontFamily: "monospace", border: "1px solid rgba(255,255,255,0.2)"
            }}>
              🔗 {(app as any).architecture}
            </div>
          )}

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {app.url && (
              <a href={app.url} target="_blank" rel="noreferrer" style={{
                background: "rgba(255,255,255,0.2)", color: "#fff", padding: "8px 16px",
                borderRadius: 8, textDecoration: "none", fontSize: 12, fontWeight: 600,
                backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.3)"
              }}>🌐 Ver App</a>
            )}
            <a href={app.github} target="_blank" rel="noreferrer" style={{
              background: "rgba(255,255,255,0.15)", color: "#fff", padding: "8px 16px",
              borderRadius: 8, textDecoration: "none", fontSize: 12, fontWeight: 600,
              backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.3)"
            }}>📂 GitHub</a>
            {(app as any).promptUrl && (
              <a href={(app as any).promptUrl} target="_blank" rel="noreferrer" style={{
                background: "rgba(255,255,255,0.15)", color: "#fff", padding: "8px 16px",
                borderRadius: 8, textDecoration: "none", fontSize: 12, fontWeight: 600,
                backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.3)"
              }}>📝 Prompt de muestra</a>
            )}
            {(app as any).imagesUrl && (
              <a href={(app as any).imagesUrl} target="_blank" rel="noreferrer" style={{
                background: "rgba(255,255,255,0.15)", color: "#fff", padding: "8px 16px",
                borderRadius: 8, textDecoration: "none", fontSize: 12, fontWeight: 600,
                backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.3)"
              }}>🖼️ Recursos</a>
            )}
            {(app as any).whatsapp && (
              <a href={`https://wa.me/54${(app as any).whatsapp}`} target="_blank" rel="noreferrer" style={{
                background: "rgba(255,255,255,0.2)", color: "#fff", padding: "8px 16px",
                borderRadius: 8, textDecoration: "none", fontSize: 12, fontWeight: 600,
                backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.3)"
              }}>💬 WhatsApp: +54 {(app as any).whatsapp}</a>
            )}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          {/* Cómo se usa */}
          <div style={{ background: "#1e293b", borderRadius: 12, padding: 20, border: "1px solid #334155" }}>
            <h3 style={{ margin: "0 0 16px", fontSize: 14, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 1 }}>
              ▶ Cómo se usa
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {app.pasos.map((paso, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{
                    background: "#0f172a", border: `1px solid ${app.color}33`,
                    borderRadius: 8, width: 36, height: 36, display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: 16, flexShrink: 0
                  }}>{paso.icon}</div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#e2e8f0", marginBottom: 2 }}>
                      {i + 1}. {paso.title}
                    </div>
                    <div style={{ fontSize: 11, color: "#64748b", lineHeight: 1.5 }}>{paso.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stack + Highlights */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "#1e293b", borderRadius: 12, padding: 20, border: "1px solid #334155" }}>
              <h3 style={{ margin: "0 0 12px", fontSize: 14, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 1 }}>
                ⚙️ Stack Técnico
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {app.stack.map((s, i) => (
                  <span key={i} style={{
                    background: `${app.color}20`, border: `1px solid ${app.color}44`,
                    color: accent,
                    padding: "4px 10px", borderRadius: 6, fontSize: 11, fontWeight: 500
                  }}>{s}</span>
                ))}
              </div>
            </div>

            <div style={{ background: "#1e293b", borderRadius: 12, padding: 20, border: "1px solid #334155", flex: 1 }}>
              <h3 style={{ margin: "0 0 12px", fontSize: 14, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 1 }}>
                ✨ Puntos Clave
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {app.highlights.map((h, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ color: accent, fontSize: 14, flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span style={{ fontSize: 12, color: "#cbd5e1", lineHeight: 1.5 }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", padding: "16px", color: "#475569", fontSize: 12, borderTop: "1px solid #1e293b" }}>
        AIPORVOS • San Rafael, Mendoza, Argentina
      </div>
    </div>
  );
}
