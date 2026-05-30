function mezclar(lista) {
  for (let i = lista.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [lista[i], lista[j]] = [lista[j], lista[i]];
  }

  return lista;
}

function generarGrupos() {
  let estudiantes = document.getElementById("estudiantes").value
    .split("\n")
    .map(nombre => nombre.trim())
    .filter(nombre => nombre !== "");

  let cantidadGrupo = parseInt(document.getElementById("cantidadGrupo").value);
  let resultado = document.getElementById("resultado");

  resultado.innerHTML = "";

  if (estudiantes.length === 0) {
    resultado.innerHTML = "<p>Por favor, escribí algunos nombres.</p>";
    return;
  }

  if (isNaN(cantidadGrupo) || cantidadGrupo < 2) {
    resultado.innerHTML = "<p>Indicá una cantidad válida de integrantes por grupo. El mínimo es 2.</p>";
    return;
  }

  if (cantidadGrupo > estudiantes.length) {
    resultado.innerHTML = "<p>La cantidad por grupo no puede ser mayor que la cantidad total de estudiantes.</p>";
    return;
  }

  estudiantes = mezclar(estudiantes);

  let numeroGrupo = 1;

  for (let i = 0; i < estudiantes.length; i += cantidadGrupo) {
    let grupo = estudiantes.slice(i, i + cantidadGrupo);

    let claseGrupo = grupo.length < cantidadGrupo ? "grupo sobrantes" : "grupo";

    resultado.innerHTML += `
      <div class="${claseGrupo}">
        <p><strong>Grupo ${numeroGrupo}:</strong> ${grupo.join(" + ")}</p>
      </div>
    `;

    numeroGrupo++;
  }
}

function limpiarTodo() {
  document.getElementById("estudiantes").value = "";
  document.getElementById("cantidadGrupo").value = "";
  document.getElementById("resultado").innerHTML = "Esperando ejecución...";
}