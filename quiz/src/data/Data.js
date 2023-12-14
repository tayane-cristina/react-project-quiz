export const Data = [
    {
        questionText: 'Qual é a linguagem de programação mais utilizada para criar páginas web?',
        category: "program",
        answerOptions: [
          { answerText: 'Python', isCorrect: false },
          { answerText: 'Java', isCorrect: false },
          { answerText: 'HTML', isCorrect: true },
          { answerText: 'CSS', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual é a finalidade da linguagem de programação Python?',
        category: "program",
        answerOptions: [
          { answerText: ' Desenvolvimento web', isCorrect: false },
          { answerText: 'Análise de dados', isCorrect: false },
          { answerText: ' Programação de aplicativos móveis', isCorrect: false },
          { answerText: 'Todos os anteriores', isCorrect: true },
        ],
      },
      {
        questionText: 'O que significa CSS em relação ao desenvolvimento web?',
        category: "program",
        answerOptions: [
          { answerText: 'Content Style Sheet', isCorrect: false },
          { answerText: 'Cascading Style Sheet', isCorrect: true },
          { answerText: 'Computer Style Sheet', isCorrect: false },
          { answerText: 'Creative Style Sheet', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual é a diferença entre um compilador e um interpretador?',
        category: "program",
        answerOptions: [
          { answerText: 'Um compilador traduz código-fonte para código de máquina, enquanto um interpretador executa o código linha por linha.', isCorrect: true },
          { answerText: 'Um compilador executa o código linha por linha, enquanto um interpretador traduz código-fonte para código de máquina.', isCorrect: false },
          { answerText: 'Ambos traduzem código-fonte para código de máquina, mas em velocidades diferentes.', isCorrect: false },
          { answerText: 'Ambos executam o código linha por linha, mas em plataformas diferentes.', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual dessas estruturas de dados utiliza o conceito "Last In, First Out" (LIFO)?',
        category: "program",
        answerOptions: [
          { answerText: 'Fila (Queue)', isCorrect: false },
          { answerText: 'Pilha (Stack)', isCorrect: true },
          { answerText: 'Lista (List)', isCorrect: false },
          { answerText: 'Árvore (Tree)', isCorrect: false },
        ],
      },

      {
        questionText: 'O que é a recursividade em programação?',
        category: "program",
        answerOptions: [
          { answerText: 'Um loop que se repete indefinidamente', isCorrect: false },
          { answerText: 'Uma função que chama a si mesma', isCorrect: true },
          { answerText: 'Um método para evitar loops', isCorrect: false },
          { answerText: 'Uma estrutura de dados em formato de árvore', isCorrect: false },
        ],
      },

      {
        questionText: 'Qual é o objetivo principal da normalização em bancos de dados relacionais?',
        category: "program",
        answerOptions: [
          { answerText: 'Reduzir a redundância de dados', isCorrect: true },
          { answerText: 'Aumentar a redundância de dados', isCorrect: false },
          { answerText: 'Melhorar a velocidade de leitura dos dados', isCorrect: false },
          { answerText: 'Limitar o número de tabelas no banco de dados', isCorrect: false },
        ],
      },

      {
        questionText: 'O que é um paradigma de programação funcional?',
        category: "program",
        answerOptions: [
          { answerText: 'Prioriza a modificação direta dos valores das variáveis', isCorrect: false },
          { answerText: 'Baseia-se em funções puras e imutabilidade de dados', isCorrect: true },
          { answerText: 'Utiliza apenas funções predefinidas pela linguagem', isCorrect: false },
          { answerText: 'Não permite a criação de funções personalizadasNão permite a criação de funções personalizadas', isCorrect: false },
        ],
      },

      {
        questionText: 'Qual é a diferença entre um método GET e um método POST em HTTP?',
        category: "program",
        answerOptions: [
          { answerText: 'GET envia dados de forma mais segura que o POST', isCorrect: false },
          { answerText: 'POST é mais rápido que o GET na transmissão de dados', isCorrect: false },
          { answerText: 'GET envia dados na URL, enquanto POST os envia no corpo da requisição', isCorrect: true },
          { answerText: 'Não há diferença significativa entre GET e POST em HTTP', isCorrect: false },
        ],
      },

      {
        questionText: 'O que é o conceito de "Big O" na análise de algoritmos?',
        category: "program",
        answerOptions: [
          { answerText: 'Representa o número máximo de iterações em um algoritmo', isCorrect: false },
          { answerText: 'Indica o tempo de execução exato de um algoritmo', isCorrect: false },
          { answerText: 'Descreve a complexidade de tempo ou espaço de um algoritmo em termos do tamanho da entrada', isCorrect: true },
          { answerText: 'Refere-se ao número mínimo de operações em um algoritmo', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual é o nome do famoso bruxo protagonista da série de livros e filmes criada por J.K. Rowling?',
        category: "entertainment",
        answerOptions: [
          { answerText: 'Harry Potter', isCorrect: true },
          { answerText: 'Frodo Bolseiro', isCorrect: false },
          { answerText: 'Luke Skywalker', isCorrect: false },
          { answerText: 'Aragorn', isCorrect: false },
        ],
      },
      {
        questionText: 'Quem é o diretor do filme "O Poderoso Chefão"?',
        category: "entertainment",
        answerOptions: [
          { answerText: 'Francis Ford Coppola', isCorrect: true },
          { answerText: 'Martin Scorsese', isCorrect: false },
          { answerText: 'Steven Spielberg', isCorrect: false },
          { answerText: 'Quentin Tarantino', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual é o nome do ator que interpretou Tony Stark, o Homem de Ferro, no Universo Cinematográfico da Marvel?',
        category: "entertainment",
        answerOptions: [
          { answerText: 'Chris Evans', isCorrect: false },
          { answerText: 'Chris Hemsworth', isCorrect: false },
          { answerText: 'Robert Downey Jr.', isCorrect: true },
          { answerText: 'Mark Ruffalo', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual é o nome da série de televisão baseada nos livros de George R.R. Martin?',
        category: "entertainment",
        answerOptions: [
          { answerText: 'The Walking Dead', isCorrect: false },
          { answerText: 'Stranger Things', isCorrect: false },
          { answerText: 'Game of Thrones', isCorrect: true },
          { answerText: 'Breaking Bad', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual é o nome do diretor responsável pela trilogia "O Senhor dos Anéis"?',
        category: "entertainment",
        answerOptions: [
          { answerText: 'Peter Jackson', isCorrect: true },
          { answerText: 'Christopher Nolan', isCorrect: false },
          { answerText: 'James Cameron', isCorrect: false },
          { answerText: 'Guillermo del Toro', isCorrect: false },
        ],
      },
      {
        questionText: 'Quem é o criador da série de animação "Os Simpsons"?',
        category: "entertainment",
        answerOptions: [
          { answerText: 'Matt Groening', isCorrect: true },
          { answerText: 'Seth MacFarlane', isCorrect: false },
          { answerText: 'Trey Parker', isCorrect: false },
          { answerText: 'Mike Judge', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual é o nome do protagonista da série de filmes "Rocky"?',
        category: "entertainment",
        answerOptions: [
          { answerText: 'Tony Montana', isCorrect: false },
          { answerText: 'Rocky Balboa', isCorrect: true },
          { answerText: 'Michael Corleone', isCorrect: false },
          { answerText: 'Don Vito Corleone', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual é o nome da série de livros que deu origem à franquia cinematográfica "Jogos Vorazes"?',
        category: "entertainment",
        answerOptions: [
          { answerText: 'Divergente', isCorrect: false },
          { answerText: 'Maze Runner', isCorrect: false },
          { answerText: 'Jogos da Fome', isCorrect: true },
          { answerText: 'A Seleção', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual é o nome do ator que interpreta Sherlock Holmes na série de televisão "Sherlock" da BBC?',
        category: "entertainment",
        answerOptions: [
          { answerText: 'Benedict Cumberbatch', isCorrect: true },
          { answerText: 'Martin Freeman', isCorrect: false },
          { answerText: 'Andrew Scott', isCorrect: false },
          { answerText: 'Tom Hiddleston', isCorrect: false },
        ],
      }, {
        questionText: 'Qual é o nome da saga cinematográfica que se passa em um universo fictício e apresenta personagens como Darth Vader e Yoda?',
        category: "entertainment",
        answerOptions: [
          { answerText: 'Star Trek', isCorrect: false },
          { answerText: 'Star Wars', isCorrect: true },
          { answerText: 'Battlestar Galactica', isCorrect: false },
          { answerText: 'Stargate', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual evento histórico é conhecido como o início da Idade Moderna?',
        category: "history",
        answerOptions: [
          { answerText: 'Descobrimento da América por Cristóvão Colombo', isCorrect: true },
          { answerText: 'Queda do Império Romano', isCorrect: false },
          { answerText: 'Guerra dos Cem Anos', isCorrect: false },
          { answerText: 'Revolução Francesa', isCorrect: false },
        ],
      },
      {
        questionText: 'Quem foi o líder da Revolução Russa de 1917?',
        category: "history",
        answerOptions: [
          { answerText: 'Vladimir Lenin', isCorrect: true },
          { answerText: 'Josef Stalin', isCorrect: false },
          { answerText: 'Leon Trotsky', isCorrect: false },
          { answerText: 'Mikhail Gorbachev', isCorrect: false },
        ],
      },
      {
        questionText: 'Em que ano a Segunda Guerra Mundial começou na Europa?',
        category: "history",
        answerOptions: [
          { answerText: '1939', isCorrect: true },
          { answerText: '1941', isCorrect: false },
          { answerText: '1943', isCorrect: false },
          { answerText: '1945', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual foi o período conhecido como Renascimento?',
        category: "history",
        answerOptions: [
          { answerText: 'Século XII', isCorrect: false },
          { answerText: 'Século XIV', isCorrect: false },
          { answerText: 'Século XV', isCorrect: true },
          { answerText: 'Século XVIII', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual foi a civilização que construiu as pirâmides de Gizé?',
        category: "history",
        answerOptions: [
          { answerText: 'Egípcios', isCorrect: true },
          { answerText: 'Gregos', isCorrect: false },
          { answerText: 'Romanos', isCorrect: false },
          { answerText: 'Mesopotâmicos', isCorrect: false },
        ],
      },
      {
        questionText: 'Quem foi o primeiro imperador romano?',
        category: "history",
        answerOptions: [
          { answerText: 'Júlio César', isCorrect: false },
          { answerText: 'Augusto', isCorrect: true },
          { answerText: 'Nero', isCorrect: false },
          { answerText: 'Marco Aurélio', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual foi a batalha decisiva que estabeleceu a supremacia de Alexandre, o Grande, sobre o Império Persa?',
        category: "history",
        answerOptions: [
          { answerText: 'Batalha de Salamina', isCorrect: false },
          { answerText: ' Batalha de Issos', isCorrect: false },
          { answerText: 'Batalha de Gaugamela', isCorrect: true },
          { answerText: 'Batalha das Termópilas', isCorrect: false },
        ],
      },
      {
        questionText: 'Quem foi o líder revolucionário que desempenhou um papel crucial na independência da Índia do domínio britânico?',
        category: "history",
        answerOptions: [
          { answerText: 'Jawaharlal Nehru', isCorrect: false },
          { answerText: 'Subhas Chandra Bose', isCorrect: false },
          { answerText: 'Indira Gandhi', isCorrect: false },
          { answerText: 'Mahatma Gandhi', isCorrect: true },
        ],
      },
      {
        questionText: 'Onde ocorreu a Revolução Industrial?',
        category: "history",
        answerOptions: [
          { answerText: 'França', isCorrect: false },
          { answerText: 'Estados Unidos', isCorrect: false },
          { answerText: 'Reino Unido', isCorrect: true },
          { answerText: 'Alemanha', isCorrect: false },
        ],
      },
      {
        questionText: 'Quem foi o líder do movimento de independência dos Estados Unidos?',
        category: "history",
        answerOptions: [
          { answerText: 'Thomas Jefferson', isCorrect: false },
          { answerText: 'George Washington', isCorrect: true },
          { answerText: 'Benjamin Franklin', isCorrect: false },
          { answerText: 'Abraham Lincoln', isCorrect: false },
        ],
      },
      {
        questionText: 'Quem pintou a Mona Lisa?',
        category: "art",
        answerOptions: [
          { answerText: 'Vincent van Gogh', isCorrect: false },
          { answerText: 'Pablo Picasso', isCorrect: false },
          { answerText: 'Leonardo da Vinci', isCorrect: true },
          { answerText: 'Michelangelo Buonarroti', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual movimento artístico é conhecido por suas formas geométricas e cores vibrantes? ',
        category: "art",
        answerOptions: [
          { answerText: 'Surrealismo', isCorrect: false },
          { answerText: 'Impressionismo', isCorrect: false },
          { answerText: 'Cubismo', isCorrect: true },
          { answerText: 'Barroco', isCorrect: false },
        ],
      },
      {
        questionText: 'Quem é o escultor de "O Pensador" e "O Beijo"?',
        category: "art",
        answerOptions: [
          { answerText: 'Auguste Rodin', isCorrect: true },
          { answerText: 'Michelangelo Buonarroti', isCorrect: false },
          { answerText: 'Donatello', isCorrect: false },
          { answerText: 'Antonio Canova', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual é a característica marcante da arquitetura gótica?',
        category: "art",
        answerOptions: [
          { answerText: 'Abóbadas em formato de cúpulas', isCorrect: false },
          { answerText: 'Arcos de volta perfeita', isCorrect: false },
          { answerText: 'Pinturas realistas', isCorrect: false },
          { answerText: 'Vitrais e grandes janelas', isCorrect: true },
        ],
      },
      {
        questionText: 'Quem foi o pintor do teto da Capela Sistina, no Vaticano?',
        category: "art",
        answerOptions: [
          { answerText: 'Rafael', isCorrect: false },
          { answerText: 'Caravaggio', isCorrect: false },
          { answerText: 'Sandro Botticelli', isCorrect: false },
          { answerText: 'Michelangelo Buonarroti', isCorrect: true },
        ],
      },
      {
        questionText: 'Qual movimento artístico é famoso por retratar a vida cotidiana e atividades ao ar livre?',
        category: "art",
        answerOptions: [
          { answerText: 'Barroco', isCorrect: false },
          { answerText: 'Romantismo', isCorrect: false },
          { answerText: 'Impressionismo', isCorrect: true },
          { answerText: 'Realismo', isCorrect: false },
        ],
      },
      {
        questionText: 'Quem foi o autor da escultura "O Beijo"?',
        category: "art",
        answerOptions: [
          { answerText: 'Auguste Rodin', isCorrect: true },
          { answerText: 'Gian Lorenzo Bernini', isCorrect: false },
          { answerText: 'Michelangelo Buonarroti', isCorrect: false },
          { answerText: 'Donatello', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual foi o período artístico conhecido por sua ênfase na simetria, equilíbrio e proporção idealizada?',
        category: "art",
        answerOptions: [
          { answerText: 'Renascimento', isCorrect: true },
          { answerText: 'Maneirismo', isCorrect: false },
          { answerText: 'Gótico', isCorrect: false },
          { answerText: 'Neoclassicismo', isCorrect: false },
        ],
      },
      {
        questionText: 'Quem foi um dos principais representantes do movimento surrealista?',
        category: "art",
        answerOptions: [
          { answerText: 'Salvador Dalí', isCorrect: true },
          { answerText: 'Henri Matisse', isCorrect: false },
          { answerText: 'Wassily Kandinsky', isCorrect: false },
          { answerText: 'Jackson Pollock', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual movimento artístico foi influenciado pelo surgimento da psicanálise e explorou o inconsciente humano?',
        category: "art",
        answerOptions: [
          { answerText: 'Cubismo', isCorrect: false },
          { answerText: 'Surrealismo', isCorrect: true },
          { answerText: 'Expressionismo', isCorrect: false },
          { answerText: 'Dadaísmo', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual é a unidade básica da vida?',
        category: "science",
        answerOptions: [
          { answerText: 'Átomo', isCorrect: false },
          { answerText: 'Célula', isCorrect: true },
          { answerText: 'Molécula', isCorrect: false },
          { answerText: 'DNA', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual é a fórmula química da água?',
        category: "science",
        answerOptions: [
          { answerText: 'CO2', isCorrect: false },
          { answerText: 'H2O', isCorrect: true },
          { answerText: 'O2', isCorrect: false },
          { answerText: 'NaCL', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual é a lei da física que afirma que a energia não pode ser criada nem destruída, apenas transformada de uma forma para outra?',
        category: "science",
        answerOptions: [
          { answerText: 'Lei da Inércia', isCorrect: false },
          { answerText: 'lei da Gravidade', isCorrect: false },
          { answerText: 'Primeira Lei da Termodinâmica', isCorrect: true },
          { answerText: 'Segunda Lei da Termodinâmica', isCorrect: false },
        ],
      },
      {
        questionText: 'Quem é considerado o pai da Teoria da Relatividade?',
        category: "science",
        answerOptions: [
          { answerText: 'Isaac Newton', isCorrect: false },
          { answerText: 'Albert Einstein', isCorrect: true },
          { answerText: 'Galileu Galilei', isCorrect: false },
          { answerText: 'Stephen Hawking', isCorrect: false },
        ],
      },
      {
        questionText: 'O que é a fotossíntese?',
        category: "science",
        answerOptions: [
          { answerText: 'Processo de transformação de luz em energia elétrica', isCorrect: false },
          { answerText: 'Processo de conversão de gás carbônico em oxigênio', isCorrect: false },
          { answerText: 'Processo de conversão de energia solar em energia química pelos vegetais', isCorrect: true },
          { answerText: 'Processo de produção de água a partir do oxigênio', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual é a parte do átomo que tem carga positiva?',
        category: "science",
        answerOptions: [
          { answerText: 'Nêutron', isCorrect: false },
          { answerText: 'Próton', isCorrect: true },
          { answerText: 'Elétron', isCorrect: false },
          { answerText: 'Núcleo', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual é a fórmula química para o oxigênio?',
        category: "science",
        answerOptions: [
          { answerText: 'O2', isCorrect: false },
          { answerText: 'H2O', isCorrect: true },
          { answerText: 'CO2', isCorrect: false },
          { answerText: 'N2', isCorrect: false },
        ],
      },
      {
        questionText: 'O que é um ácido na química?',
        category: "science",
        answerOptions: [
          { answerText: 'Uma substância com pH acima de 7', isCorrect: false },
          { answerText: 'Uma substância com pH neutro', isCorrect: false },
          { answerText: 'Uma substância que libera íons de hidrogênio em solução aquosa', isCorrect: true },
          { answerText: 'Uma substância que neutraliza uma base', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual é a unidade fundamental da hereditariedade e transmissão de características genéticas?',
        category: "science",
        answerOptions: [
          { answerText: 'Cromossomo', isCorrect: false },
          { answerText: 'Gene', isCorrect: true },
          { answerText: 'DNA', isCorrect: false },
          { answerText: 'Proteína', isCorrect: false },
        ],
      },
      {
        questionText: 'Quem foi o cientista que propôs a teoria do Big Bang?',
        category: "science",
        answerOptions: [
          { answerText: 'Edwin Hubble', isCorrect: false },
          { answerText: 'Isaac Newton', isCorrect: false },
          { answerText: 'Albert Einstein', isCorrect: false },
          { answerText: 'Georges Lemaître', isCorrect: true },
        ],
      },
      {
        questionText: 'Qual esporte utiliza uma bola redonda e é jogado com os pés, sendo o esporte mais popular do mundo?',
        category: "sport",
        answerOptions: [
          { answerText: 'Futebol (ou Futebol Soccer)', isCorrect: true },
          { answerText: 'Basquete', isCorrect: false },
          { answerText: 'Tênis', isCorrect: false },
          { answerText: 'Rugby', isCorrect: false },
        ],
      },
      {
        questionText: 'Quantos jogadores compõem uma equipe de basquete em quadra?',
        category: "sport",
        answerOptions: [
          { answerText: '5', isCorrect: true },
          { answerText: '6', isCorrect: false },
          { answerText: '7', isCorrect: false },
          { answerText: '4', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual é o nome do esporte que é jogado em uma mesa dividida por uma rede, utilizando pequenas raquetes e uma bolinha leve?',
        category: "sport",
        answerOptions: [
          { answerText: 'Tênis de Mesa (ou Pingue-Pongue)', isCorrect: true },
          { answerText: 'Badminton', isCorrect: false },
          { answerText: 'Squash', isCorrect: false },
          { answerText: 'Paddle', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual esporte é conhecido por utilizar um taco e uma bola, sendo jogado em um campo com buracos?',
        category: "sport",
        answerOptions: [
          { answerText: 'Críquete', isCorrect: false },
          { answerText: 'Golfe', isCorrect: true },
          { answerText: 'Beisebol', isCorrect: false },
          { answerText: 'Hóquei', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual esporte de combate utiliza movimentos de socos, chutes, cotoveladas e joelhadas, originando-se na Tailândia?',
        category: "sport",
        answerOptions: [
          { answerText: 'Karatê', isCorrect: false },
          { answerText: 'Boxe', isCorrect: false },
          { answerText: 'Taekwondo', isCorrect: false },
          { answerText: 'Muay Thai', isCorrect: true },
        ],
      },
      {
        questionText: 'Em que esporte os competidores buscam completar um percurso em uma pista o mais rápido possível, pulando obstáculos?',
        category: "sport",
        answerOptions: [
          { answerText: 'Corrida de Obstáculos', isCorrect: true },
          { answerText: 'Atletismo', isCorrect: false },
          { answerText: 'Salto com Vara', isCorrect: false },
          { answerText: 'Hipismo', isCorrect: false },
        ],
      },
      {
        questionText: 'Qual esporte é jogado em uma quadra retangular por duas equipes, utilizando uma bola de vôlei e é permitido tocar a bola com qualquer parte do corpo?',
        category: "sport",
        answerOptions: [
          { answerText: 'Vôlei', isCorrect: true },
          { answerText: 'Basquete', isCorrect: false },
          { answerText: 'Handebol', isCorrect: false },
          { answerText: 'Rugby', isCorrect: false },
        ],
      },
      {
        questionText: 'Em qual esporte o objetivo é marcar pontos ao encestar a bola em uma cesta fixada em uma extremidade da quadra?',
        category: "sport",
        answerOptions: [
          { answerText: 'Beisebol', isCorrect: false },
          { answerText: 'Futebol Americano', isCorrect: false },
          { answerText: 'Tênis', isCorrect: false },
          { answerText: 'Basquete', isCorrect: true },
        ],
      },
      {
        questionText: 'Qual é o nome do esporte que envolve uma bola de tênis e é jogado em uma quadra com paredes, sendo permitido um ou dois jogadores por equipe?',
        category: "sport",
        answerOptions: [
          { answerText: 'Tênis', isCorrect: false },
          { answerText: 'Padel', isCorrect: false },
          { answerText: 'Squash', isCorrect: true },
          { answerText: 'Badminton', isCorrect: false },
        ],
      },
      {
        questionText: 'Em qual esporte os competidores devem atravessar uma linha de chegada nadando quatro estilos diferentes em uma única prova?',
        category: "sport",
        answerOptions: [
          { answerText: 'Nado Sincronizado', isCorrect: false },
          { answerText: 'Polo Aquático', isCorrect: false },
          { answerText: 'Saltos Ornamentais', isCorrect: false },
          { answerText: 'Natação', isCorrect: true },
        ],
      },
]; 