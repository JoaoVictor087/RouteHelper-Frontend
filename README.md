# Route Helper

# Introdução
Este é o projeto Route Helper, desenvolvido para oferecer uma experiência intuitiva e eficiente aos usuários do metrô de São Paulo.
Projetado com um mapa interativo para forncecer informações personalizadas para os usuários, uma sessão para registro de reportes e com um painel com os status das linhas do metrô de São Paulo em tempo real

Ao entrar no site o usuário vai estar no menu inicial, que conta com o painel de status das linhas de metrô e um botão para calculo de rotas, que o direciona para o mapa interativo.

Todas as páginas do site possuem um menu no cabeçalho, permitindo uma navegação rápida e intuitiva entre elas.
O Campo 'Home' direciona o usuário para o menu inicial.
O Campo 'Mapa Interativo' direciona o usuário para a página do mapa interativo para calculo de rotas.
O Campo 'Reportes' direciona o usuário para a página de reportes, para que o usuário possa reportar incidentes.
O Campo 'Sobre Nós' direciona o usuário para a página de informações sobre os integrantes do grupo.

# Home
A página Home possui um botão que redireciona o usuário para o mapa interativo, e um painel com os status das linhas de metrô de São Paulo em tempo real.
Os status das linhas são fornecidas pela API desenvolvida na disciplina 'Domain Driven Design Using Java' - https://routehelper.up.railway.app/statusLinha

# Mapa Interativo
A página do mapa interativo contém campos para que o usuário selecione sua estação de origem e sua estação de destino, além de um botão para realizar o calculo da rota. Após o usuário selecionar a origem e o destino e clicar no botão de cálculo de rota, será traçada a rota entre as duas estações no mapa. 
O cálculo de rotas é realizado pela API desenvolvida na disciplina 'Domain Driven Design Using Java' - https://routehelper.up.railway.app/rotas

# Reportes
A página de reportes possui campos para que o usuário possa preencher e enviar para reportar incidentes, os campos são: Nome(opcional para garantir anonimato ao usuário), Local(Obrigatório), e Descrição(Obrigatório). Após clicar no botão enviar, os reportes são registrados no banco de dados através da  API desenvolvida na disciplina 'Domain Driven Design Using Java' - https://routehelper.up.railway.app/reportes

# Sobre Nós
A página de membros possui fotos e os links para os perfis dos membros do grupo no Linkedin e GitHub.

# Links

Link para o vídeo de apresentação dos recursos do projeto - https://youtu.be/BsbSO1nnrcA

Link para o Figma do projeto - https://www.figma.com/design/XdqsXspS3mZrDgoALaMDZB/Projeto-RouteHelper?node-id=0-1&t=VYmkmCHmXM5oGZQf-1

Link para o site do projeto - https://route-helper.vercel.app/

Integrantes:
Vinicius Kenzo Tocuyosi - RM:559982
João Victor Alves da Silva - RM:559726
João Victor Trevisan - RM:560263 