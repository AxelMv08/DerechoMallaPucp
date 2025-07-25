// ─────────────────────────────────────────────────────────────
// script.js: Malla Derecho PUCP (5°–12° ciclos)
// ─────────────────────────────────────────────────────────────

const cursos = {
  // 5° CICLO
  "DEC280": {
    nombre: "Instituciones del Derecho Privado", crédito: 3, ciclo: 5,
    prereq: [{ c: "DER243", t: "sim" }, { c: "DER242", t: "sim" }],
    estado: "noaprobado"
  },
  "DEC289": {
    nombre: "Teoría del Conflicto y Mecanismos de Solución", crédito: 2, ciclo: 5,
    prereq: [{ c: "DER243", t: "sim" }, { c: "DER242", t: "sim" }],
    estado: "noaprobado"
  },
  "DEC294": {
    nombre: "Sistema Romano Germánico y Derecho Anglosajón", crédito: 2, ciclo: 5,
    prereq: [{ c: "DER243", t: "sim" }, { c: "DER242", t: "sim" }],
    estado: "noaprobado"
  },
  "DEE214": {
    nombre: "Derecho Constitucional 1", crédito: 3, ciclo: 5,
    prereq: [{ c: "DER243", t: "sim" }, { c: "DER242", t: "sim" }],
    estado: "noaprobado"
  },
  "DER242": {
    nombre: "Modelos de Abogado y Excelencia Profesional", crédito: 1, ciclo: 5,
    prereq: [{ c: "DER243", t: "apr" }],
    estado: "noaprobado"
  },
  "DER243": {
    nombre: "Introducción a las Ciencias Jurídicas", crédito: 5, ciclo: 5,
    prereq: [{ c: "DER242", t: "apr" }],
    estado: "noaprobado"
  },
  "ELEC5": {
    nombre: "Curso Electivo Obligatorio", crédito: 3, ciclo: 5,
    prereq: [{ options: ["DER244", "DER245"], t: "sim" }],
    estado: "noaprobado",
    selectedOption: null
  },
  "DER244": { nombre: "Antropología y Derecho", crédito: 3, ciclo: 5, prereq: [], estado: "noaprobado" },
  "DER245": { nombre: "Sociología y Derecho", crédito: 3, ciclo: 5, prereq: [], estado: "noaprobado" },

  // 6° CICLO
  "DEC281": {
    nombre: "Reales", crédito: 3, ciclo: 6,
    prereq: [{ c: "DER243", t: "apr" }, { c: "DEC280", t: "apr" }, { c: "DEC294", t: "apr" }],
    estado: "noaprobado"
  },
  "DEC282": {
    nombre: "Instituciones del Derecho Privado 2", crédito: 3, ciclo: 6,
    prereq: [{ c: "DER243", t: "apr" }, { c: "DEC280", t: "apr" }, { c: "DEC294", t: "apr" }],
    estado: "noaprobado"
  },
  "DEE218": {
    nombre: "Derechos Fundamentales e Interpretación Constitucional", crédito: 4, ciclo: 6,
    prereq: [{ c: "DER243", t: "apr" }, { c: "DEE214", t: "apr" }],
    estado: "noaprobado"
  },
  "DEM222": {
    nombre: "Derecho Contable", crédito: 2, ciclo: 6,
    prereq: [{ c: "DER243", t: "apr" }],
    estado: "noaprobado"
  },
  "DEP216": {
    nombre: "Instituciones del Derecho Sancionador", crédito: 2, ciclo: 6,
    prereq: [{ c: "DER243", t: "apr" }, { c: "DEE214", t: "apr" }],
    estado: "noaprobado"
  },
  "DER249": {
    nombre: "Comunicación Jurídica Eficaz", crédito: 2, ciclo: 6,
    prereq: [{ c: "DER243", t: "apr" }, { c: "DER242", t: "apr" }],
    estado: "noaprobado"
  },
  "DER332": {
    nombre: "Ética y Responsabilidad Profesional", crédito: 3, ciclo: 6,
    prereq: [{ c: "DEC289", t: "apr" }, { c: "DER242", t: "apr" }, { c: "DER243", t: "apr" }],
    estado: "noaprobado"
  },
  "ELEC6": {
    nombre: "Curso Electivo Obligatorio", crédito: 3, ciclo: 6,
    prereq: [{ options: ["DER246", "DER247"], t: "apr" }],
    estado: "noaprobado",
    selectedOption: null
  },
  "DER246": { nombre: "Psicología y Derecho", crédito: 3, ciclo: 6, prereq: [], estado: "noaprobado" },
  "DER247": { nombre: "Economía y Derecho", crédito: 3, ciclo: 6, prereq: [], estado: "noaprobado" },

  // 7° CICLO
  "DEC283": {
    nombre: "Contratos", crédito: 3, ciclo: 7,
    prereq: [{ c: "DEE218", t: "apr" }, { c: "DEC282", t: "apr" }, { c: "DEC281", t: "apr" }],
    estado: "noaprobado"
  },
  "DEC284": {
    nombre: "Familia", crédito: 3, ciclo: 7,
    prereq: [{ c: "DEE218", t: "apr" }, { c: "DEC282", t: "apr" }],
    estado: "noaprobado"
  },
  "DEE203": {
    nombre: "Derecho Administrativo 1", crédito: 3, ciclo: 7,
    prereq: [{ c: "DEE218", t: "apr" }, { c: "DEC282", t: "apr" }, { c: "DEP216", t: "apr" }, { c: "DEC289", t: "apr" }],
    estado: "noaprobado"
  },
  "DEL220": {
  nombre: "Derecho Laboral General",
  crédito: 4,
  ciclo: 7,
  prereq: [
    { c: "DEE218", t: "apr" },
    { c: "DEC289", t: "apr" },
    { options: ["DER244", "DER245"], t: "apr" }
  ],
  estado: "noaprobado"
},



  "DEM223": {
    nombre: "Instituciones del Derecho Mercantil", crédito: 4, ciclo: 7,
    prereq: [{ c: "DEE218", t: "apr" }, { c: "DEC282", t: "apr" }],
    estado: "noaprobado"
  },
  "DEP217": {
    nombre: "Teoría del Delito", crédito: 3, ciclo: 7,
    prereq: [{ c: "DEP216", t: "apr" }, { c: "DEE218", t: "apr" }],
    estado: "noaprobado"
  },
  "DER248": {
    nombre: "Argumentación Jurídica", crédito: 2, ciclo: 7,
    prereq: [{ c: "DEE218", t: "apr" }, { c: "DEC289", t: "apr" }],
    estado: "noaprobado"
  },

    // 8° CICLO
  "DEC285": {
    nombre: "Obligaciones", crédito: 3, ciclo: 8,
    prereq: [{ c: "DEC283", t: "apr" }],
    estado: "noaprobado"
  },
  "DEE204": {
    nombre: "Derecho Administrativo 2", crédito: 3, ciclo: 8,
    prereq: [{ c: "DEE203", t: "apr" }, { c: "DEC283", t: "apr" }],
    estado: "noaprobado"
  },
  "DEE219": {
    nombre: "Sistema de Justicia y Fund. Constitucionales", crédito: 3, ciclo: 8,
    prereq: [{ c: "DEC289", t: "apr" }, { c: "DEC283", t: "apr" }],
    estado: "noaprobado"
  },
  "DEL204": {
    nombre: "Derecho Laboral Especial", crédito: 3, ciclo: 8,
    prereq: [{ c: "DEL220", t: "apr" }, { c: "DEC283", t: "apr" }],
    estado: "noaprobado"
  },
  "DEM224": {
    nombre: "Sociedades Anónimas", crédito: 3, ciclo: 8,
    prereq: [{ c: "DEM223", t: "apr" }, { c: "DEM222", t: "apr" }, { c: "DEC283", t: "apr" }],
    estado: "noaprobado"
  },
  "DEP218": {
    nombre: "Delitos contra la Vida, etc.", crédito: 3, ciclo: 8,
    prereq: [{ c: "DEP217", t: "apr" }],
    estado: "noaprobado"
  },
  "DET212": {
    nombre: "Derecho Tributario General", crédito: 3, ciclo: 8,
    prereq: [{ c: "DEM222", t: "apr" }, { c: "DEE203", t: "apr" }],
    estado: "noaprobado"
  },

  // 9° CICLO
  "DEC286": {
    nombre: "Responsabilidad Civil", crédito: 3, ciclo: 9,
    prereq: [{ c: "DEC285", t: "apr" }],
    estado: "noaprobado"
  },
  "DEC288": {
    nombre: "Sucesiones", crédito: 2, ciclo: 9,
    prereq: [{ c: "DEC284", t: "apr" }, { c: "DEC285", t: "apr" }],
    estado: "noaprobado"
  },
  "DEC290": {
    nombre: "Postulación del Proceso", crédito: 3, ciclo: 9,
    prereq: [{ c: "DEC285", t: "apr" }, { c: "DEE219", t: "apr" }],
    estado: "noaprobado"
  },
  "DEE207": {
    nombre: "Derecho Internacional Público", crédito: 3, ciclo: 9,
    prereq: [{ c: "DEC285", t: "apr" }, { c: "DEE219", t: "apr" }],
    estado: "noaprobado"
  },
  "DER205": {
    nombre: "Filosofía del Derecho", crédito: 3, ciclo: 9,
    prereq: [{ c: "DEP217", t: "apr" }, { c: "DER248", t: "apr" }, { c: "DEC285", t: "apr" }],
    estado: "noaprobado"
  },
  "DET213": {
    nombre: "Impuesto a la Renta e IGV", crédito: 4, ciclo: 9,
    prereq: [{ c: "DET212", t: "apr" }, { c: "DEM224", t: "apr" }, { c: "DEL204", t: "apr" }],
    estado: "noaprobado"
  },
  "1DER09": {
    nombre: "Taller de Investigación Jurídica", crédito: 3, ciclo: 9,
    prereq: [],
    estado: "noaprobado"
  },

  // 10° CICLO
  "DEC241": {
  nombre: "Derecho Internacional Privado",
  crédito: 3,
  ciclo: 10,
  prereq: [
    { c: "DEM224", t: "apr" },
    { c: "DEC290", t: "apr" },
    { c: "DEE207", t: "apr" },
    { c: "DEC286", t: "apr" },
    { c: "DEC288", t: "apr" }
  ],
  estado: "noaprobado"
},
"DEC287": {
  nombre: "Contratos Típicos",
  crédito: 2,
  ciclo: 10,
  prereq: [
    { c: "DEC285", t: "apr" }
  ],
  estado: "noaprobado"
},
"DEC291": {
  nombre: "Teoría de la Prueba",
  crédito: 2,
  ciclo: 10,
  prereq: [
    { c: "DER248", t: "apr" },
    { c: "DEC290", t: "apr" },
    { c: "DEP217", t: "apr" }
  ],
  estado: "noaprobado"
},
"DEC292": {
  nombre: "Revisión e Impugnación Judicial",
  crédito: 2,
  ciclo: 10,
  prereq: [
    { c: "DER248", t: "apr" },
    { c: "DEC290", t: "apr" },
    { c: "DEP217", t: "apr" }
  ],
  estado: "noaprobado"
},
"DEE330": {
  nombre: "Derechos Humanos",
  crédito: 3,
  ciclo: 10,
  prereq: [
    { c: "DEE207", t: "apr" },
    { c: "DEP218", t: "apr" }
  ],
  estado: "noaprobado"
},
"ELEC10": {
  nombre: "Curso Electivo Obligatorio",
  crédito: 2,
  ciclo: 10,
  selectedOption: null,
  prereq: [
    {
      options: ["DEP219", "DEP220"],
      t: "apr"
    }
  ],
  estado: "noaprobado"
},
"DEP219": {
  nombre: "Delitos contra la Administración Pública",
  crédito: 2,
  ciclo: 10,
  prereq: [
    { c: "DEE204", t: "apr" },
    { c: "DEP217", t: "apr" }
  ],
  estado: "noaprobado"
},
"DEP220": {
  nombre: "Derecho Penal Económico",
  crédito: 2,
  ciclo: 10,
  prereq: [
    { c: "DET213", t: "apr" },
    { c: "DEP217", t: "apr" }
  ],
  estado: "noaprobado"
},
"DEP222": {
  nombre: "Derecho Procesal Penal",
  crédito: 3,
  ciclo: 10,
  prereq: [
    { c: "DEP218", t: "apr" },
    { c: "DEC290", t: "apr" }
  ],
  estado: "noaprobado"
},

"ELECTIVO1": {
  nombre: "Electivo de la especialidad o de otra área",
  crédito: 3,
  ciclo: 10,
  prereq: [],
  estado: "noaprobado"
},

  // 11° CICLO
"DEC293": {
  nombre: "Tutela Ejecutiva y Protección Cautelar",
  crédito: 3,
  ciclo: 11,
  prereq: [
    { c: "DEC286", t: "apr" },
    { c: "DEC292", t: "apr" },
    { c: "DEC291", t: "apr" }
  ],
  estado: "noaprobado"
},
"DER259": {
  nombre: "Clínica Jurídica y Responsabilidad Social",
  crédito: 3,
  ciclo: 11,
  prereq: [],
  estado: "noaprobado"
},
"DER250": {
  nombre: "Seminario de Investigación Jurídica",
  crédito: 2,
  ciclo: 11,
  prereq: [
    { c: "1DER09", t: "apr" }
  ],
  estado: "noaprobado"
},
"SEMINARIO": {
  nombre: "Seminario de Integración",
  crédito: 3,
  ciclo: 11,
  prereq: [],
  estado: "noaprobado"
},
"ELECTIVO2": {
  nombre: "Electivo de la especialidad o de otra área",
  crédito: 6,
  ciclo: 11,
  prereq: [],
  estado: "noaprobado"
},
"CURSOINT": {
  nombre: "Curso Integrador",
  crédito: 3,
  ciclo: 11,
  prereq: [],
  estado: "noaprobado"
},


  // 12° CICLO
"1DER13": {
  nombre: "Asesoría en Investigación",
  crédito: 2,
  ciclo: 12,
  prereq: [
    { c: "DER250", t: "apr" }
  ],
  estado: "noaprobado"
},
"SEMINARIO2": {
  nombre: "Seminario de Integración",
  crédito: 3,
  ciclo: 12,
  prereq: [],
  estado: "noaprobado"
},
"ELECTIVO3": {
  nombre: "Electivo de la especialidad o de otra área",
  crédito: 12,
  ciclo: 12,
  prereq: [],
  estado: "noaprobado"
},
"CURSOINT2": {
  nombre: "Curso Integrador",
  crédito: 3,
  ciclo: 12,
  prereq: [],
  estado: "noaprobado"
}


};

// Construye la UI, oculta los cursos dentro de options (solo si son electivos reales con selectedOption)
const optionCodes = new Set(
  Object.values(cursos)
    .filter(c => c.selectedOption !== undefined) // solo electivos verdaderos
    .flatMap(c => c.prereq.filter(p => p.options).flatMap(p => p.options))
);

const cont = document.getElementById("malla-container");
const ciclos = [...new Set(Object.values(cursos).map(c => c.ciclo))].sort((a, b) => a - b);

for (let ciclo of ciclos) {
  const col = document.createElement("div");
  col.className = "col-ciclo";
  col.innerHTML = `<h2>${ciclo}° ciclo</h2>`;

  Object.entries(cursos)
    .filter(([cod, c]) => c.ciclo === ciclo && (!optionCodes.has(cod)))
    .forEach(([cod, c]) => {
      const card = document.createElement("div");
      card.id = cod;
      card.className = `curso ${c.estado}` + (c.selectedOption !== undefined ? " electivo" : "");

      if (c.selectedOption) {
        const sel = cursos[c.selectedOption];
        card.innerHTML = `<div class="titulo">${sel.nombre}</div>` +
                         `<div class="info">${c.selectedOption} • ${sel.crédito} cr</div>`;
      } else {
        card.innerHTML = `<div class="titulo">${c.nombre}</div>` +
                         `<div class="info">${cod} • ${c.crédito} cr</div>`;
      }

      card.onclick = () => toggleCurso(cod);
      col.appendChild(card);
    });

  cont.appendChild(col);
}

function toggleCurso(cod) {
  const curso = cursos[cod];
  if (curso.selectedOption !== undefined && !curso.selectedOption) {
    const opt = curso.prereq.find(p => p.options);
    const card = document.getElementById(cod);
    if (!opt || card.querySelector("select")) return;
    const sel = document.createElement("select");
    sel.innerHTML = `<option value="" disabled selected>Elige una opción</option>` +
      opt.options.map(o => `<option value="${o}">${o} — ${cursos[o].nombre}</option>`).join("");
    sel.onchange = () => {
      const seleccionado = sel.value;
      curso.selectedOption = seleccionado;
      curso.estado = "seleccionado";
      cursos[seleccionado].estado = "seleccionado";

      // Marcar también los prerequisitos del curso elegido
      if (cursos[seleccionado].prereq) {
        cursos[seleccionado].prereq.forEach(p => {
          if (p.c) cursos[p.c].estado = "seleccionado";
        });
      }

      actualizarUI();
    };
    card.appendChild(sel);
    return;
  }

  if (curso.estado === "noaprobado") {
    curso.estado = "seleccionado";
    curso.prereq.forEach(p => p.c && (cursos[p.c].estado = "seleccionado"));
  } else {
    curso.estado = "noaprobado";
    curso.prereq.forEach(p => p.c && (cursos[p.c].estado = "noaprobado"));
    if (curso.selectedOption) {
      cursos[curso.selectedOption].estado = "noaprobado";
      curso.selectedOption = null;
    }
  }
  actualizarUI();
}

function actualizarUI() {
  Object.entries(cursos).forEach(([cod, c]) => {
    const card = document.getElementById(cod);
    if (!card) return;
    card.className = "curso";
    if (c.selectedOption !== undefined) card.classList.add("electivo");
    if (c.estado === "seleccionado") {
      card.classList.add("seleccionado");
    } else {
      const aprReqs = c.prereq.filter(p => p.t === "apr");
      const ok = aprReqs.length > 0 && aprReqs.every(p => {
        if (p.c) {
          const real = cursos[p.c];
          if (real.estado === "seleccionado") return true;

          // Verificar si fue elegido como opción en un electivo
          const electivoPadre = Object.values(cursos).find(c =>
            c.selectedOption === p.c && c.estado === "seleccionado"
          );
          return electivoPadre !== undefined;
        }
        return false;
      });
      card.classList.add(ok ? "habilitado" : "noaprobado");
    }
  });
}

actualizarUI();
