const mainButton = document.getElementById('button');

mainButton.addEventListener('click', function() {

});

function dateDiff(inicialDate, finalDate) {
  const diffEmMilissegundos = Math.abs(inicialDate - finalDate);
  const diffEmDias = Math.ceil(diffEmMilissegundos / (1000 * 60 * 60 * 24));

  return diffEmDias;
}