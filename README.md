<h1 align="center">
 	<br>
 	  <img width="200" alt="Image" src="https://github.com/user-attachments/assets/e65ef266-3854-47d0-8da3-f74ec9630476" />
 	<br>
</h1>
<h1 align="center"> Tradutor W.D</h1>
<p> Um aplicativo web criado utilizando HTML, JS e CSS básicos que modifica texto para os símbolos da fonte Wingdings, além de oferecer outras funcionalidades com a intenção de aprofundar-se no tema.</p>

## O que é?
Wingdings é uma fonte tipográfica criada pelos designers Kris Holmes e Charles Bigelow para Microsoft em 1990 com o nome oficial de Lucida Icons, Arrows, and Stars. Renomeada Wingdings em 1992, ela foi distribuída, no formato TrueType, em todas as edições do sistema operacional Windows a partir da versão 3.1. A aplicação faz a tradução de textos para esta mesma fonte citada.

[Descrição da Wikipedia](https://pt.wikipedia.org/wiki/Wingdings)

## Funcionalidades
### Tradutor
Permite traduzir textos e palavras de caracteres alfabéticos tradicionais 

### Upload de imagens
Permite enviar imagens com texto para assim as traduzir para a fonte wingdings.

### Quiz 
Um quiz que oferece perguntas relacinados à fonte para testar os conhecimenos da mesma.

### Chatbot
Um chatbot que responde quaisquer perguntas sobre à fonte (atualmente só funcionará caso você possua uma chave api para integrar)

## Estrutura
```text
Tradutor_WD/
│
├── src/                      # Código-fonte principal da aplicação
│   ├── assets/               # Imagens utilizadas no projeto
│   ├── pages/                # Páginas utilizadas nos iframes
│   ├── scripts/              # Arquivos JavaScript e servidor Node.js
│   └── styles/               # Arquivos de estilo (CSS)
│
├── .gitattributes            # Configuração de normalização de finais de linha (LF)
├── .gitignore                # Arquivos e pastas ignorados pelo Git
├── package.json              # Dependências e scripts do projeto
├── package-lock.json         # Registro das versões das dependências
├── README.md                 # Documentação principal do projeto
├── saber_mais.html           # Página com os iframes do quiz e do chatbot
└── tradutor.html             # Página do tradutor e do leitor de imagens
```

## Futuras atualizações
### Histórico
No projeto ja é possível utilizar essa função, entretanto apenas com console.log diretamente 

### Leitor OCR de Wingdings
Fazer com que seja possível ler imagens na fonte Wingdings para caracteres tradicionais ( possivelmente com método de machine learning)
