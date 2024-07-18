# Aprendendo Docker

*Meus primeiros passos em Docker*

![Docker](/github/logo_docker.png)

# Sumário

* [História](#História)
* [Arquitetura Docker](#Arquitetura-Docker)
* [Imagens](#Imagens)
* [Containers](#Containers)
* [Containerize an application](#Containerize-an-application)
* [Referências](#Referências)

## História

A origem do Docker está ligada à empresa dotCloud, uma plataforma como serviço (PaaS) fundada por Solomon Hykes em 2010. Hykes, juntamente com sua equipe, desenvolveu o Docker como um projeto interno para melhorar a flexibilidade e eficiência do gerenciamento de seus serviços. Em 2013, a dotCloud decidiu abrir o código do Docker e torná-lo um projeto de código aberto, o que rapidamente atraiu a atenção da comunidade de desenvolvedores.

* Lançamento inicial (março de 2013): Docker foi lançado como um projeto de código aberto. A ideia era simplificar a criação e gestão de contêineres, algo que já existia, mas que era complexo e não amplamente adotado.

* Crescimento da comunidade: Após o lançamento, Docker rapidamente ganhou popularidade entre desenvolvedores e empresas por facilitar a criação, compartilhamento e execução de aplicativos em diferentes ambientes de maneira consistente.

* Mudança de foco da dotCloud: Em 2013, a dotCloud mudou seu nome para Docker Inc., concentrando-se totalmente no desenvolvimento e suporte do Docker. A plataforma original da dotCloud foi descontinuada em 2014.

* Docker 1.0 (junho de 2014): A primeira versão estável do Docker foi lançada, marcando um ponto importante na maturidade do software e incentivando sua adoção em produção por muitas empresas.

* Expansão do ecossistema: Ao longo dos anos, Docker Inc. e a comunidade ao redor do Docker desenvolveram uma série de ferramentas e projetos complementares, como Docker Compose (para definir e executar aplicativos multi-contêiner), Docker Swarm (para orquestração de contêineres) e Docker Hub (um repositório de imagens de contêineres).

* Impacto no desenvolvimento de software: Docker revolucionou a maneira como o software é desenvolvido, testado e implantado, promovendo práticas como DevOps e integração contínua/entrega contínua (CI/CD).

## Descrição

Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres.

O Docker elimina tarefas de configuração repetitivas e é usado em todo o ciclo de vida do desenvolvimento tornando o processo de desenvolvimento de aplicativos mais rápidos, fácil e portátil - desktop e nuvem. A plataforma abrangente de ponta a ponta do Docker inclui UIs, CLIs, APIs e segurança que são projetados para trabalhar juntos em todo o ciclo de vida de entrega do aplicatvo.

**Por que usar Docker?**

Docker garante que a aplicação que está rodando no ambiente de desenvolvimento irá também rodar igualmente no ambiente de testes e produção.

Também é possível mudar de hospedagem ou até de nuvem (AWS, Azure, GCP e etc) e continuar executandoa a aplicação exatamente do mesmo modo.

Outra vantagem é compartilhar uma aplicação que está configurada para executar em um container com outros desenvolvedores ou até publicamente com a comunidade.

Cada contêiner é isolado, o que significa que as dependências e configurações de uma aplicação não interferem em outras. O isolamento também proporciona uma camada adicional de segurança, limitando o impacto de vulnerabilidades em uma aplicação específica.

Contêineres são mais leves do que máquinas virtuais, pois compartilham o kernel do host, resultando em menor overhead. Docker permite a execução de vários contêineres em uma única máquina, otimizando a utilização de recursos e facilitando o dimensionamento horizontal.

**Quando usar Docker?**

* Desenvolvimento: Use Docker no desenvolvimento quando na produção estiver usando docker, quando precisar compartilhar as mesmas configurações de execução com outros desenvolvedores e quando quiser usar dependências de ambientes e versões diferentes.

* Produção: Use Docker para facilitar a orquestração ou quando existir a possibilidade de mudar de nuvem de forma mais simplificada.

## Arquitetura Docker

![Docker](/github/arquitetura.png)

O Docker usa uma arquitetura cliente-servidor, disponibilizanda por meio de uma API REST, Sockets UNIX e interface de rede. O cliente Docker envia comandos para o Docker Daemon que, por sua vez, executa a solicitação como criar um container, imagem, rede e assim por diante.

**Docker Client**

O cliente Docker é a principal forma usada pelos usuários de interagirem com o Docker. Ele é uma interface de linha de comando (CLI)

**Docker Desktop**

O Docker Desktop é um aplicativo que pode ser instalado em ambiente Mac, Windows ou Linux que permite interagir com o cliente Docker por meios visuais.

Também ao instalar o Docker Desktop, você automaticamente já está instalado o Daemon Docker, Docker Client, Docker Compose e outras ferramentas.

**Docker Registry**

Um registro do Docker é um local onde armazena imagens Docker. O Docker Hub é um registro do Docker público que qualquer pessoa pode usar.

Mas támbem é possível criar ou usar serviços de registro Docker privados nos principais provedores de nuvens.

**Docker Objects**

Existem vários objetos no universo do Docker, os principais são:

* Imagem
* Contêiner
* Rede
* Volume

## Imagens

Uma imagem Docker é um objeto com acesso somente de leitura com instruções necessárias para criar um container Docker. O mais comunm é uma imagem ser baseada em outras e adicionar personalizações, como por exemplo: criar uma imagem baseada na imagem do sistema operacional Ubuntu e fornecer instruções para instalar um servidor web como Nginx, uma aplicação como NestJs e executar esta aplicação.

Embora já exista diversas imagens prontas e oficiais, ainda é possível criar suas próprias imagens. Para isso, a maneira mais fácil é usar um arquivo com o nome Dockerfile e descrever as etapas necessárias nele.

## Containers

Um contêiner é uma instância executável e com permissão de alterações de uma imagem. É possível criar, iniciar, parar, mover e excluir um contêiner através da API do Docker ou CLI. Também podemos conectar um contêiner a uma ou mais redes, anexar armazenamento externo ou até mesmo criar uma nova imagem a partir do estado atual dele. 

Um contêiner é iniciado sempre a partir de uma imagem e qualquer alteração em seu estado é perdida após ele ser parado de executar. Então caso queira persistir as suas alterações será necessário gravar em um volume anexado ou gerar uma nova imagem do seu contêiner.

## Containerize an application

A expressão Containerize an application significa empacotar uma aplicação em um container de software. Isso permite que a aplicação seja isolada do sistema operacional e do hardware subjacente, e possa ser facilmente movida e executada em diferentes ambientes sem comprometer sua funcionalidade. Containers são usados para garantir a consistência e a portabilidade da aplicação, facilitando a implantação, a manutenção e a escalabilidade.

Muitas das vezes será necessário especificar além do sistema operacional, linguagem de programação e software também instalar outras dependências e realizar configurações iniciais necessárias que normalmente são esquecidas depois de um tempo que a aplicação já está funcionando em seu localhost ou produção.

**Efêmeros**

Os Containers Docker precisam ser efêmeros porque isso ajuda a garantir a integridade e a portabilidade da aplicação.

Quando um container é projetado para ser efêmero, ele é criado e usado apenas para uma tarefa específica, e depois é descartado. Isso significa que, em caso de falha ou problema, container pode ser facilmente recriado sem impactar o resto do sistema.

Além disso, isso ajuda a evitar o acúmulo de configurações desatualizadas e recursos desnecessários que possam comprometer a performance e a segurança do sistema. A arquitetura de containers efêmeros é uma das principais vantagens do uso de containers para implantação de aplicações.

**Dockerfile**

Para realizar esse procedimento na usa aplicação será essencial criar um arquivo chamado Dockerfile que irá descrever o passo a passo necessário para preparar o ambiente de execução da sua aplicação e a própria configuração dela.

O arquivo Dockerfile é um arquivo baseado em texto sem extensão que irá conter scripts de instruções que o Docker entende e usará para criar uma imagem de container.

Após ter um arquivo Dockerfile completo será necessário fazer a construção da imagem com base neste arquivo, este processo por sua vez nós chamamos de build.

## Referências

- [Udemy](https://www.udemy.com/course/curso-docker-hcode/)
- [docker](https://docs.docker.com/)
- [Chat GPT](https://chat.openai.com/)
- [TabNews](https://www.tabnews.com.br/) 