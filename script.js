const divListaFilme = document.querySelector ("#Lista_Filmes")
const btnTerror = document.querySelector ("#btn_terror")

const listaFilmes = [
  // AÇÃO
  { filmes: "Mad Max: Estrada da Fúria", sinopse: "Em um mundo pós-apocalíptico, Max ajuda Furiosa a fugir de um tirano.", genero: "Ação" },
  { filmes: "John Wick", sinopse: "Um ex-assassino busca vingança após perder tudo.", genero: "Ação" },
  { filmes: "Gladiador", sinopse: "Um general romano traído luta por vingança na arena.", genero: "Ação" },
  { filmes: "Duro de Matar", sinopse: "Um policial enfrenta terroristas em um prédio.", genero: "Ação" },
  { filmes: "Velozes e Furiosos 5", sinopse: "Um grupo planeja um grande assalto no Rio.", genero: "Ação" },
  { filmes: "Missão: Impossível - Fallout", sinopse: "Um agente tenta evitar uma catástrofe global.", genero: "Ação" },
  { filmes: "Matrix", sinopse: "Um hacker descobre a verdade sobre a realidade.", genero: "Ação" },
  { filmes: "300", sinopse: "Espartanos enfrentam um enorme exército persa.", genero: "Ação" },
  { filmes: "Homem-Aranha: Sem Volta Para Casa", sinopse: "Peter enfrenta consequências do multiverso.", genero: "Ação" },
  { filmes: "Batman: O Cavaleiro das Trevas", sinopse: "Batman enfrenta o Coringa em Gotham.", genero: "Ação" },

  // COMÉDIA
  { filmes: "Se Beber, Não Case!", sinopse: "Amigos tentam lembrar uma noite caótica.", genero: "Comédia" },
  { filmes: "As Branquelas", sinopse: "Agentes se disfarçam para resolver um caso.", genero: "Comédia" },
  { filmes: "Superbad", sinopse: "Adolescentes tentam aproveitar uma festa.", genero: "Comédia" },
  { filmes: "O Máskara", sinopse: "Um homem ganha poderes com uma máscara.", genero: "Comédia" },
  { filmes: "Debi & Lóide", sinopse: "Dois amigos vivem situações absurdas.", genero: "Comédia" },
  { filmes: "Click", sinopse: "Um controle remoto permite controlar a vida.", genero: "Comédia" },
  { filmes: "Gente Grande", sinopse: "Amigos se reencontram após anos.", genero: "Comédia" },
  { filmes: "Escola de Rock", sinopse: "Um músico cria uma banda com alunos.", genero: "Comédia" },
  { filmes: "Zoolander", sinopse: "Um modelo se envolve em uma conspiração.", genero: "Comédia" },
  { filmes: "O Âncora", sinopse: "Um apresentador enfrenta rivalidades.", genero: "Comédia" },

  // TERROR
  { filmes: "Invocação do Mal", sinopse: "Investigadores enfrentam forças malignas.", genero: "Terror" },
  { filmes: "Hereditário", sinopse: "Uma família enfrenta eventos perturbadores.", genero: "Terror" },
  { filmes: "O Exorcista", sinopse: "Uma jovem é possuída por um demônio.", genero: "Terror" },
  { filmes: "Corra!", sinopse: "Um homem descobre um segredo assustador.", genero: "Terror" },
  { filmes: "Atividade Paranormal", sinopse: "Um casal registra eventos sobrenaturais.", genero: "Terror" },
  { filmes: "A Bruxa", sinopse: "Uma família enfrenta forças sombrias.", genero: "Terror" },
  { filmes: "It: A Coisa", sinopse: "Crianças enfrentam um palhaço maligno.", genero: "Terror" },
  { filmes: "O Iluminado", sinopse: "Um homem enlouquece em um hotel isolado.", genero: "Terror" },
  { filmes: "Pânico", sinopse: "Um assassino mascarado aterroriza jovens.", genero: "Terror" },
  { filmes: "Annabelle", sinopse: "Uma boneca possuída causa terror.", genero: "Terror" },

  // FICÇÃO CIENTÍFICA
  { filmes: "Interestelar", sinopse: "Astronautas buscam um novo lar para humanidade.", genero: "Ficção Científica" },
  { filmes: "Blade Runner 2049", sinopse: "Um agente descobre um segredo perigoso.", genero: "Ficção Científica" },
  { filmes: "Avatar", sinopse: "Humanos exploram um planeta alienígena.", genero: "Ficção Científica" },
  { filmes: "Ex Machina", sinopse: "Um teste avalia a inteligência de uma IA.", genero: "Ficção Científica" },
  { filmes: "Gravidade", sinopse: "Astronautas tentam sobreviver no espaço.", genero: "Ficção Científica" },
  { filmes: "A Origem", sinopse: "Um ladrão invade sonhos.", genero: "Ficção Científica" },
  { filmes: "Distrito 9", sinopse: "Alienígenas vivem segregados na Terra.", genero: "Ficção Científica" },
  { filmes: "Elysium", sinopse: "Um homem luta contra desigualdade futurista.", genero: "Ficção Científica" },
  { filmes: "O Predador", sinopse: "Um alienígena caça humanos.", genero: "Ficção Científica" },
  { filmes: "Eu, Robô", sinopse: "Um policial investiga robôs.", genero: "Ficção Científica" },

  // DRAMA
  { filmes: "Um Sonho de Liberdade", sinopse: "Um preso planeja sua liberdade ao longo dos anos.", genero: "Drama" },
  { filmes: "Forrest Gump", sinopse: "A vida de um homem simples em grandes eventos.", genero: "Drama" },
  { filmes: "Clube da Luta", sinopse: "Um clube secreto sai do controle.", genero: "Drama" },
  { filmes: "À Espera de um Milagre", sinopse: "Guardas testemunham eventos sobrenaturais.", genero: "Drama" },
  { filmes: "O Pianista", sinopse: "Um músico sobrevive à guerra.", genero: "Drama" },
  { filmes: "Coringa", sinopse: "A origem de um vilão icônico.", genero: "Drama" },
  { filmes: "A Lista de Schindler", sinopse: "Um homem salva vidas no Holocausto.", genero: "Drama" },
  { filmes: "Beleza Americana", sinopse: "Um homem questiona sua vida.", genero: "Drama" },
  { filmes: "Moonlight", sinopse: "A jornada de autodescoberta de um jovem.", genero: "Drama" },
  { filmes: "O Lobo de Wall Street", sinopse: "A ascensão e queda de um corretor.", genero: "Drama" }
];
function filtrarFilmesTerror() {
    divListaFilme.innerHTML = ""
    const filmesTerror = listaFilmes.filter((filme)=> {
        return filme.genero === "#btn_terror"
    })
    filmesTerror.forEach ((filme) => {
        divListaFilme.innerHTML += `<li><b>${filme.filmes}</b> <br> ${filme.sinopse} <br> <i>${filme.genero}</i></li>` 
    })
}

btnTerror.addEventListener("click", filtrarFilmesTerror)

