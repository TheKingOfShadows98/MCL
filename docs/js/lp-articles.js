let section = document.getElementById('libres-pensamientos');
console.log(section);

function newArticle(info){
    let article = document.createElement('ARTICLE');
    article.classList.add('container-lp');
    let title = document.createElement('H3');
    title.classList.add('titulo-lp');
    title.innerHTML = info.title;
    let div_text = document.createElement('DIV');
    div_text.classList.add('head-container-lp');
    let author = document.createElement('H4');
    author.classList.add('autor-lp');
    author.innerHTML = info.author;
    let date = document.createElement('H5');
    date.classList.add('fecha-lp');
    date.innerHTML = info.date;
    let number = document.createElement('H3');
    number.innerHTML = 'N°' + info.number;
    number.classList.add('numero-lp');
    let content = document.createElement('P');
    content.classList.add('contenido-lp');
    content.innerHTML = info.content;
    
    div_text.appendChild(title);
    div_text.appendChild(number);
    article.appendChild(div_text);
    article.appendChild(author);
    article.appendChild(date);
    article.appendChild(content);
    return article;
}

let articulo_blank = {
    title : 'somos un estado laico, afirma la sala de lo constitucional',
    author : 'alberto romero de urbiztondo',
    number : '534',
    date : '15 de septiembre de 2019',
    content :`El día 31 de julio la Corte Suprema de Justicia, publicó un Comunicado titulado “Decisiones o medidas estatales no pueden tomarse con base en una religión”, donde recoge la Resolución 117-2018 de la Corte Suprema de Justicia, que contiene importantes argumentaciones sobre el carácter laico del Estado salvadoreño, contemplado en nuestra Constitución.\nEn dicha Resolución la Sala nos recuerda que “El Estado tiene prohibido por mandato Constitucional …realizar actos oficiales de adhesión, así sean simbólicos, a una creencia, religión o iglesia, ya que estas acciones del Estado violarían el principio de separación entre iglesias y el Estado”. El Señor Quijano como Presidente de la Asamblea Legislativa, debe de tener esto en cuenta para no permitir celebraciones religiosas como las procesiones con la Virgen de Fátima que organiza con los Heraldos del Evangelio en el Salón del Órgano Legislativo , o los encuentros con pastores evangélicos que organizó el Sr. Gallegos, cuando también era Presidente de la Asamblea Legislativa. De igual forma es anticonstitucional la celebración de misas en instituciones del Estado, tal como realizó la Fiscalía General de la República, en el llamado miércoles de ceniza.\nDe igual forma la Sala de lo Constitucional nos recuerda que “Desde el Estado, solo la intolerancia no debe ser tolerada, de modo que una visión cerrada, intransigente o fundamentalista de la realidad no puede servir de base para decisiones públicas o institucionales”.\nEsta resolución de la Sala, recordemos que genera jurisprudencia, por lo que debe de orientar el comportamiento de legisladores, funcionarios y empleados públicos. Por ello deberían desaparecer de las instituciones públicas la realización de celebraciones y rituales religiosas, para garantizar la libertad de creencias y pensamientos de toda la ciudadanía, a la que no le pueden imponer las creencias particulares de un grupo de funcionarios públicos.\nDe igual manera, en la formulación de leyes y políticas, debe de ser el derecho, el conocimiento científico y el debate informado el que las sustente, no las creencias o códigos morales específicos de una institución religiosa, legítimas y garantizadas por el Estado, pero que no se pueden imponer a toda la sociedad.`
}
section.appendChild(newArticle(articulo_blank));