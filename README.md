# Aprendendo Docker

*Meus primeiros passos em Docker*

![Docker](/github/logo_docker.png)

# Sumário

* [História](#História)
* [Arquitetura Docker](#Arquitetura-Docker)
* [Imagens](#Imagens)
* [Containers](#Containers)
* [Containerize an application](#Containerize-an-application)
* [Volumes](#Volumes)
* [Compose](#Compose)
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

### Por que usar Docker?

Docker garante que a aplicação que está rodando no ambiente de desenvolvimento irá também rodar igualmente no ambiente de testes e produção.

Também é possível mudar de hospedagem ou até de nuvem (AWS, Azure, GCP e etc) e continuar executandoa a aplicação exatamente do mesmo modo.

Outra vantagem é compartilhar uma aplicação que está configurada para executar em um container com outros desenvolvedores ou até publicamente com a comunidade.

Cada contêiner é isolado, o que significa que as dependências e configurações de uma aplicação não interferem em outras. O isolamento também proporciona uma camada adicional de segurança, limitando o impacto de vulnerabilidades em uma aplicação específica.

Contêineres são mais leves do que máquinas virtuais, pois compartilham o kernel do host, resultando em menor overhead. Docker permite a execução de vários contêineres em uma única máquina, otimizando a utilização de recursos e facilitando o dimensionamento horizontal.

### Quando usar Docker?

* Desenvolvimento: Use Docker no desenvolvimento quando na produção estiver usando docker, quando precisar compartilhar as mesmas configurações de execução com outros desenvolvedores e quando quiser usar dependências de ambientes e versões diferentes.

* Produção: Use Docker para facilitar a orquestração ou quando existir a possibilidade de mudar de nuvem de forma mais simplificada.

## Arquitetura Docker

![Docker](/github/arquitetura.png)

O Docker usa uma arquitetura cliente-servidor, disponibilizanda por meio de uma API REST, Sockets UNIX e interface de rede. O cliente Docker envia comandos para o Docker Daemon que, por sua vez, executa a solicitação como criar um container, imagem, rede e assim por diante.

### Docker Client

O cliente Docker é a principal forma usada pelos usuários de interagirem com o Docker. Ele é uma interface de linha de comando (CLI)

### Docker Desktop

O Docker Desktop é um aplicativo que pode ser instalado em ambiente Mac, Windows ou Linux que permite interagir com o cliente Docker por meios visuais.

Também ao instalar o Docker Desktop, você automaticamente já está instalado o Daemon Docker, Docker Client, Docker Compose e outras ferramentas.

### Docker Registry

Um registro do Docker é um local onde armazena imagens Docker. O Docker Hub é um registro do Docker público que qualquer pessoa pode usar.

Mas támbem é possível criar ou usar serviços de registro Docker privados nos principais provedores de nuvens.

### Docker Objects

Existem vários objetos no universo do Docker, os principais são:

* Imagem
* Contêiner
* Rede
* Volume

## Imagens

Uma imagem Docker é um objeto com acesso somente de leitura com instruções necessárias para criar um container Docker. O mais comunm é uma imagem ser baseada em outras e adicionar personalizações, como por exemplo: criar uma imagem baseada na imagem do sistema operacional Ubuntu e fornecer instruções para instalar um servidor web como Nginx, uma aplicação como NestJs e executar esta aplicação.

Embora já exista diversas imagens prontas e oficiais, ainda é possível criar suas próprias imagens. Para isso, a maneira mais fácil é usar um arquivo com o nome Dockerfile e descrever as etapas necessárias nele.


**Lista as Imagens**

```bash
docker images
```

**"Download" de uma imagem**

```bash
docker pull [nome da imagem:versão da image]
```

**Deletar uma imagem**

```bash
docker rmi [Id da imagem]
```

## Containers

Um contêiner é uma instância executável e com permissão de alterações de uma imagem. É possível criar, iniciar, parar, mover e excluir um contêiner através da API do Docker ou CLI. Também podemos conectar um contêiner a uma ou mais redes, anexar armazenamento externo ou até mesmo criar uma nova imagem a partir do estado atual dele. 

Um contêiner é iniciado sempre a partir de uma imagem e qualquer alteração em seu estado é perdida após ele ser parado de executar. Então caso queira persistir as suas alterações será necessário gravar em um volume anexado ou gerar uma nova imagem do seu contêiner.

**Start de um container**

```bash
docker run [nomde do container]
```

*Observação: caso não tenha uma imagem, o docker run vai identificar a falta e fazer o download da imagem junto do container*

**Listar os Containers em Execução**

```bash
docker ps
```

*Observação: Para apresentar todos os containers colocar a flag -a no final do ps*

**Iniciar um Containers**

```bash
docker start [id do container]
```

**Parar um Containers**

```bash
docker stop [id do container]
```

## Containerize an application

A expressão Containerize an application significa empacotar uma aplicação em um container de software. Isso permite que a aplicação seja isolada do sistema operacional e do hardware subjacente, e possa ser facilmente movida e executada em diferentes ambientes sem comprometer sua funcionalidade. Containers são usados para garantir a consistência e a portabilidade da aplicação, facilitando a implantação, a manutenção e a escalabilidade.

Muitas das vezes será necessário especificar além do sistema operacional, linguagem de programação e software também instalar outras dependências e realizar configurações iniciais necessárias que normalmente são esquecidas depois de um tempo que a aplicação já está funcionando em seu localhost ou produção.


### Efêmeros

Os Containers Docker precisam ser efêmeros porque isso ajuda a garantir a integridade e a portabilidade da aplicação.

Quando um container é projetado para ser efêmero, ele é criado e usado apenas para uma tarefa específica, e depois é descartado. Isso significa que, em caso de falha ou problema, container pode ser facilmente recriado sem impactar o resto do sistema.

Além disso, isso ajuda a evitar o acúmulo de configurações desatualizadas e recursos desnecessários que possam comprometer a performance e a segurança do sistema. A arquitetura de containers efêmeros é uma das principais vantagens do uso de containers para implantação de aplicações.

### Dockerfile

Para realizar esse procedimento na usa aplicação será essencial criar um arquivo chamado Dockerfile que irá descrever o passo a passo necessário para preparar o ambiente de execução da sua aplicação e a própria configuração dela.

O arquivo Dockerfile é um arquivo baseado em texto sem extensão que irá conter scripts de instruções que o Docker entende e usará para criar uma imagem de container.

Após ter um arquivo Dockerfile completo será necessário fazer a construção da imagem com base neste arquivo, este processo por sua vez nós chamamos de build.

**Estrutura do DockerFile**

```Dockerfile
FROM baseImage

WORKDIR /the/workdir/path

COPY source dest

RUN command

COPY source dest

EXPOSE port

CMD [ "executable" ]
```

**Iniciar um container apartir do dockerfile**

```bash
docker run -itd -p [port do hard]:[port do container] [nome da imagem]
```

## Network

A network como o próprio nome sugere são redes. Esse recurso é uma das razões pelas quais os contianers e serviços do Docker são tão poderosos, uma vez que você pode conectá-los tanto a outros containers como a cargas de trabalho que não sejam Docker.

Na verdade, um container Docker nem precisa saber que está em um ambiente do Docker para executar a sua carga de trabalho. E a comunicação de rede vai funcionar da mesma forma tanto no Linux como no Windows e até mesmo misturar os dois.

As redes no Docker funcionam usando drivers e por isso existem vários drivers que podem ser usados como: bridge (padrão), host, overlay, ipvlan, macvlan e none.

### Bridge Network

A rede bridge é a rede padrão do Docker e é usada quando você cria um novo contêiner sem especificar explicitamente uma rede. Cada contêiner conectado a uma rede bridge recebe um endereço IP na sub-rede da bridge. Os contêineres em uma rede brigde podem se comunicar entre si diretamente e também com a rede externa por meio de uma tradução de porta feita pelo próprio Docker. Essa rede é útil para a maioria das aplicações, pois fornece isolamento entre os contêineres e permite que eles se comuniquem facilmente entre si.

### Host Network

Nesta configuração, o contêiner compartilha o mesmo espaço de rede do host. Isso significa que o contêiner não terá seu próprio endereço IP isolado e utilizará diretamente o IP e as portas do host. Como resultado, os contêineres têm acesso direto à rede do host, e qualquer porta exposta no conteiner também imediatamente acessível no host. Essa abordagem é útil em casos em que você deseja que o contêiner tenha a mesma visibilidade e disponibilidade de rede que o host.

### Overlay Network

As redes overlay são utilizadas principalmente em ambientes distribuídos, como clusters Docker Swarm, para permitir a comunição entre contêineres em diferentes hosts. Essa rede cria uma rede virtual que abrange todos os hosts do cluster, permitindo que os contêineres em qualquer host se comuniquem diretamente com os contêineres em outros hosts. A rede overlay usa protocolos de túnel, como VXLN, para conectar os hosts e garantir que os pacotes sejam roteados corretamente entre os contêineres em diferentes máquinas.


### Macvlan Network

A rede macvlan permite que contênieres tenham endereços MAC e IPs associados a interfaces de rede físicas no host, o que lhes dá a aparência de serem dispositivos reais na rede física. Isso é útil em cenários onde você deseja que os conteineres sejam diferente acessíveis na rede, como se fossem máquinas físicas separadas. Com a rede macvlan, os contêineres podem ser configurados com IPs e MACs únicos na rede local, permitindo que eles sejam acessados como entidades independentes na rede.

### None Network

Quando você atribui a opção "--network=none" ao criar um contêiner, ele não terá conectividade de rede externa. Essa rede é útil quando você precisa que o contêiner execute tarefas internas sem comunicação com outras redes, como processos isolados ou depuração.

**Como expor portas em containers:**

```bash
docker run -d -p [porta do host]:[porta que deseja acessar dentro do container] --name [nome do container] [imagem]
```

**Como linkar Containers**

```bash
docker run -d -p [porta do host]:[porta que deseja acessar dentro do container] --link [no do container que deseja conectar] [imagem]
```

*Observação: Esse recurso ainda existe porém não é mais utilizado, pois atualmente utilizam recursos de rede*

## Volumes

O Volume é um mecanismo para persistir dados de um container Docker. Embora as montagens de volumes dependem da estrutura de diretório e do sistema operacional da máquina host, o volumes são totalmente gerenciados pelo Docker.

Os volumes podem ser compartilhados com segurança entre vários containers, funcionam tanto com Linux como Windowns, facilitando o processo de backup de dados, podem ser armazenados em hosts remotos ou provedores de nuvem e podem ser criptografados.

Além disso, os volumes geralmente são uma escolha melhor do que persistir dados na camada gerenciável de um container, porque um volume não aumenta o tamanho dos containers que o utilizam.

**Criando pasta onde ficará os volumes**

```bash
docker run -d -p [porta do host]:[porta que deseja acessar dentro do container] -v [caminho para chegar na pasta que vai armazenar os volumes] [imagem]
```

ou

```bash
docker run -d -p [porta do host]:[porta que deseja acessar dentro do container] -v [nome do volume]:[Rota para o local que será armazenado] [imagem]
```

**Acessar todos os comandos do volume via terminal**

```bash
docker volume --help
```

## Compose 

O Compose é uma ferramenta que serve para definir e executar aplicativos Docker que dependem de vários containers. Você pode configurar o compose usando um arquivo YAML e depois executar toda a configuração com apenas um comando.

Você pode usar o compose tanto no desenvolvimento e nos testes, como também na produção e ele possui ainda comandos para gerenciar todo o ciclo de vida do seu aplicativo como: iniciar, parar, reconstruir, exibir status, transmitir a saída dos logs e executar comandos únicos.

**Iniciar o Docker Compose**

```bash
docker compose up
```

## Referências

- [Udemy](https://www.udemy.com/course/curso-docker-hcode/)
- [docker](https://docs.docker.com/)
- [Chat GPT](https://chat.openai.com/)
- [TabNews](https://www.tabnews.com.br/) 