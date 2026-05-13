import type { Metadata } from "next"
import Link from "next/link"
import { basePath } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const politicaDescription =
  "Política de Privacidade da Rodobras Guindastes & Muncks. Conheça como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD."

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: politicaDescription,
  keywords: [
    "guindastes",
    "muncks",
    "locação",
    "Florianópolis",
    "Coqueiros",
    "Via Expressa",
    "Norte da Ilha",
    "São José",
    "Palhoça",
    "Biguaçu",
    "Santa Catarina",
  ],
  alternates: {
    canonical: "/politica-de-privacidade",
  },
  openGraph: {
    title: "Política de Privacidade | Rodobras Guindastes",
    description: politicaDescription,
    url: "/politica-de-privacidade",
    type: "article",
    images: [{ url: `${basePath}/icon.svg`, width: 512, height: 512, alt: "Rodobras Guindastes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de Privacidade | Rodobras Guindastes",
    description: politicaDescription,
    images: [`${basePath}/icon.svg`],
  },
}

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background">
        <article className="mx-auto max-w-3xl px-4 py-12 pb-16 lg:px-8">
          <header className="mb-10">
            <Link
              href="/"
              className="text-sm font-medium text-primary hover:underline"
            >
              ← Voltar ao site
            </Link>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Política de Privacidade
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Rodobras Guindastes & Muncks
            </p>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-foreground">
            <p className="leading-relaxed">
              A Rodobras possui como prioridades o compromisso com a privacidade
              e segurança nos comprometendo com a transparência do tratamento de
              dados pessoais dos nossos usuários/clientes. Por isso, esta
              presente Política de Privacidade estabelece como é feita a
              coleta, uso e transferência de informações de clientes ou outras
              pessoas que acessam ou usam nosso site.
            </p>
            <p className="leading-relaxed">
              Ao utilizar nossos serviços e se cadastrar em nossa plataforma, o
              usuário/cliente entende e dá sua plena concordância para
              coletarmos e utilizarmos suas informações pessoais nas formas
              descritas nesta Política, a qual está sob as normas de Proteção de
              Dados (LGPD, Lei Federal 13.709/2018), das disposições
              consumeristas da Lei Federal 8.078/1990, da Lei 12.414/2011 (Lei do
              Cadastro Positivo) e as demais normas do ordenamento jurídico
              brasileiro aplicáveis.
            </p>
            <p className="leading-relaxed">
              Dessa forma, a Rodobras Guindastes & Muncks LTDA, doravante
              denominada simplesmente como &quot;Rodobras&quot;, pessoa jurídica
              de direito privado, com matriz inscrita no CNPJ sob nº
              23.694.035/0001-73, situada na Rua Paula Ramos, n° 702, Coqueiros,
              Sala 1601, CEP: 88080-401, na cidade de Florianópolis – SC, no
              papel de Controladora de Dados, obriga-se ao disposto na presente
              Política de Privacidade.
            </p>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                1. Quais dados coletamos sobre você e para qual finalidade?
              </h2>
              <p className="leading-relaxed">
                Nosso site coleta e utiliza alguns dados pessoais seus, de forma
                a viabilizar a prestação de serviços e aprimorar a experiência
                de uso. Essa coleta não ocorre de modo automatizado, mas tão
                somente quando o titular do dado ou representante deste insere os
                dados pessoais em um de nossos formulários:
              </p>
              <p className="leading-relaxed">
                O Formulário de Orçamento de operação é utilizado quando o
                usuário/cliente entra em contato com a Rodobras buscando obter
                estimativa de custo da locação. Aqui, são coletados: nome, nome
                da empresa, telefone, CPF, e-mail e endereço da operação.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                2.1. Consentimento
              </h2>
              <p className="leading-relaxed">
                É a partir do seu consentimento que tratamos os seus dados
                pessoais. O consentimento é a manifestação livre, informada e
                inequívoca pela qual você autoriza a Rodobras a tratar seus
                dados.
              </p>
              <p className="leading-relaxed">
                Assim, em consonância com a Lei Geral de Proteção de Dados, seus
                dados só serão coletados, tratados e armazenados mediante prévio
                e expresso consentimento.
              </p>
              <p className="leading-relaxed">
                Ao utilizar os serviços da Rodobras e fornecer seus dados
                pessoais, você está ciente e consentindo com as disposições
                desta Política de Privacidade, além de conhecer seus direitos e
                como exercê-los.
              </p>
              <p className="leading-relaxed">
                A qualquer tempo e sem nenhum custo, você poderá revogar seu
                consentimento, desde que não haja outra base legal para que
                mantenhamos o tratamento dos dados já coletados.
              </p>
              <p className="leading-relaxed">
                É importante destacar que a revogação do consentimento para o
                tratamento dos dados pode implicar a impossibilidade da
                performance adequada de alguma funcionalidade do site que dependa
                da operação. Tais consequências serão informadas previamente.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                3. Quais são os seus direitos?
              </h2>
              <p className="leading-relaxed">
                A Rodobras assegura a seus usuários/clientes seus direitos de
                titular previstos no artigo 18 da Lei Geral de Proteção de Dados.
                Dessa forma, você pode, de maneira gratuita e a qualquer tempo:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Confirmar a existência de tratamento de dados, de maneira
                  simplificada ou em formato claro e completo.
                </li>
                <li>
                  Acessar seus dados, podendo solicitá-los em uma cópia legível
                  sob forma impressa ou por meio eletrônico, seguro e idôneo.
                </li>
                <li>
                  Corrigir seus dados, ao solicitar a edição, correção ou
                  atualização destes.
                </li>
                <li>
                  Limitar seus dados quando desnecessários, excessivos ou
                  tratados em desconformidade com a legislação através da
                  anonimização, bloqueio ou eliminação.
                </li>
                <li>
                  Solicitar a portabilidade de seus dados, através de um
                  relatório de dados cadastrais que a Rodobras trata a seu
                  respeito.
                </li>
                <li>
                  Eliminar seus dados tratados a partir de seu consentimento,
                  exceto nos casos previstos em lei.
                </li>
                <li>
                  Revogar seu consentimento, desautorizando o tratamento de seus
                  dados, caso não haja outra justificativa legal para o
                  tratamento além do consentimento.
                </li>
                <li>
                  Informar-se sobre a possibilidade de não fornecer seu
                  consentimento e sobre as consequências da negativa.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                4. Como você pode exercer seus direitos de titular?
              </h2>
              <p className="leading-relaxed">
                Para exercer seus direitos de titular, você deve entrar em
                contato com a Rodobras através do e-mail{" "}
                <a
                  href="mailto:adm@rodobrasguindastes.com.br"
                  className="font-medium text-primary hover:underline"
                >
                  adm@rodobrasguindastes.com.br
                </a>
                .
              </p>
              <p className="leading-relaxed">
                De forma a garantir a sua correta identificação como titular dos
                dados pessoais objeto da solicitação, é possível que solicitemos
                documentos ou demais comprovações que possam comprovar sua
                identidade. Nessa hipótese, você será informado previamente.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                5. Como e por quanto tempo seus dados serão armazenados?
              </h2>
              <p className="leading-relaxed">
                Os dados pessoais coletados pela Rodobras serão utilizados e
                armazenados durante o tempo necessário para a prestação do
                serviço ou para que as finalidades elencadas na presente Política
                de Privacidade sejam atingidas, considerando os direitos dos
                titulares dos dados e dos controladores.
              </p>
              <p className="leading-relaxed">
                De modo geral, seus dados serão mantidos enquanto a relação
                contratual entre você e a Rodobras perdurar. Findado o período
                de armazenamento dos dados pessoais, estes serão excluídos de
                nossas bases de dados ou anonimizados, ressalvadas as hipóteses
                legalmente previstas no artigo 16 lei geral de proteção de
                dados, a saber:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  I – cumprimento de obrigação legal ou regulatória pelo
                  controlador;
                </li>
                <li>
                  II – estudo por órgão de pesquisa, garantida, sempre que
                  possível, a anonimização dos dados pessoais;
                </li>
                <li>
                  III – transferência a terceiro, desde que respeitados os
                  requisitos de tratamento de dados dispostos nesta Lei; ou
                </li>
                <li>
                  IV – uso exclusivo do controlador, vedado seu acesso por
                  terceiro, e desde que anonimizados os dados.
                </li>
              </ul>
              <p className="leading-relaxed">
                Isto é, informações pessoais sobre usuário/cliente que sejam
                imprescindíveis para o cumprimento de determinações legais,
                judiciais e administrativas e/ou para o exercício do direito de
                defesa em processos judiciais e administrativos serão mantidas, a
                despeito da exclusão dos demais dados.
              </p>
              <p className="leading-relaxed">
                O armazenamento de dados coletados pela Rodobras reflete o nosso
                compromisso com a segurança e privacidade dos seus dados.
                Empregamos medidas e soluções técnicas de proteção aptas a
                garantir a confidencialidade, integridade e inviolabilidade dos
                seus dados. Além disso, também contamos com medidas de segurança
                apropriadas aos riscos e com controle de acesso às informações
                armazenadas.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                6. O que fazemos para manter seus dados seguros?
              </h2>
              <p className="leading-relaxed">
                Para mantermos suas informações pessoais seguras, usamos
                ferramentas físicas, eletrônicas e gerenciais orientadas para a
                proteção da sua privacidade.
              </p>
              <p className="leading-relaxed">
                Aplicamos essas ferramentas levando em consideração a natureza
                dos dados pessoais coletados, o contexto e a finalidade do
                tratamento e os riscos que eventuais violações gerariam para os
                direitos e liberdades do titular dos dados coletados e tratados.
              </p>
              <p className="leading-relaxed">
                Entre as medidas que adotamos, destacamos as seguintes:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Apenas pessoas autorizadas têm acesso a seus dados pessoais;</li>
                <li>
                  O acesso a seus dados pessoais é feito somente após o
                  compromisso de confidencialidade;
                </li>
                <li>
                  Seus dados pessoais são armazenados em ambiente seguro e
                  idôneo;
                </li>
              </ul>
              <p className="leading-relaxed">
                A Rodobras se compromete a adotar as melhores posturas para
                evitar incidentes de segurança. Contudo, é necessário destacar
                que nenhuma página virtual é inteiramente segura e livre de
                riscos. É possível que, apesar de todos os nossos protocolos de
                segurança, problemas de culpa exclusivamente de terceiros
                ocorram, como ataques cibernéticos de hackers, ou também em
                decorrência da negligência ou imprudência do próprio
                usuário/cliente.
              </p>
              <p className="leading-relaxed">
                Em caso de incidentes de segurança que possa gerar risco ou dano
                relevante a qualquer um de nossos usuários/clientes,
                comunicaremos aos afetados e a Autoridade Nacional de Proteção
                de Dados sobre o ocorrido, em consonância com as disposições da
                Lei Geral de Proteção de Dados.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                7. Com quem seus dados podem ser compartilhados?
              </h2>
              <p className="leading-relaxed">
                Tendo em vista a preservação de sua privacidade, a Rodobras não
                compartilhará seus dados pessoais com nenhum terceiro não
                autorizado.
              </p>
              <p className="leading-relaxed">
                Seus dados poderão ser compartilhados com nossos parceiros
                comerciais, a depender da necessidade do negócio. Estes recebem
                seus dados apenas na medida do necessário para a prestação dos
                serviços contratados e nossos contratos são orientados pelas
                normas de proteção de dados do ordenamento jurídico brasileiro.
              </p>
              <p className="leading-relaxed">
                Além disso, também existe outras hipóteses em que seus dados
                poderão ser compartilhados, que são:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  I – Determinação legal, requerimento, requisição ou ordem
                  judicial, com autoridades judiciais, administrativas ou
                  governamentais competentes;
                </li>
                <li>
                  II – Caso de movimentações societárias, como fusão, aquisição e
                  incorporação, de forma automática;
                </li>
                <li>
                  III – Proteção dos direitos da Rodobras em qualquer tipo de
                  conflito, inclusive os de teor judicial;
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6">
                7.1. Transferência internacional de dados
              </h3>
              <p className="leading-relaxed">
                Alguns dos terceiros com quem compartilhamos seus dados podem ser
                localizados ou possuir instalações localizadas em países
                estrangeiros. Nessas condições, de toda forma, seus dados
                pessoais estarão sujeitos à Lei Geral de Proteção de Dados e às
                demais legislações brasileiras de proteção de dados.
              </p>
              <p className="leading-relaxed">
                Nesse sentido, a Rodobras se compromete a sempre adotar
                eficientes padrões de segurança cibernética e de proteção de
                dados, nos melhores esforços de garantir e cumprir as exigências
                legislativas. Do mesmo modo, todos os nossos arquivos são
                armazenados em nuvem no exterior.
              </p>
              <p className="leading-relaxed">
                Ao concordar com essa Política de Privacidade, você concorda com
                esse compartilhamento, que se dará conforme as finalidades
                descritas no presente instrumento.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                8. Cookies ou dados de navegação
              </h2>
              <p className="leading-relaxed">
                A Rodobras faz uso de Cookies, que são arquivos de texto
                enviados pela plataforma ao seu computador e que nele se
                armazenam, que contém informações relacionadas à navegação do
                site. Em suma, os Cookies são utilizados para aprimorar a
                experiência de uso.
              </p>
              <p className="leading-relaxed">
                Ao acessar nosso site e consentir com o uso de Cookies, você
                manifesta conhecer e aceitar a utilização de um sistema de
                coleta de dados de navegação com o uso de Cookies em seu
                dispositivo.
              </p>
              <p className="leading-relaxed">
                Você pode, a qualquer tempo e sem nenhum custo, alterar as
                permissões, bloquear ou recusar os Cookies. Todavia, a revogação
                do consentimento de determinados Cookies pode inviabilizar o
                funcionamento correto de alguns recursos da plataforma.
              </p>
              <p className="leading-relaxed">
                Para gerenciar os cookies do seu navegador, basta fazê-lo
                diretamente nas configurações do deste, na área de gestão de
                Cookies do navegador utilizado.
              </p>
              <p className="leading-relaxed">
                Você pode ter maiores informações sobre os Cookies que utilizamos
                e como eles funcionam na nossa Política de Cookies, disponível
                neste documento (Anexo I).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                9. Alteração desta Política de Privacidade
              </h2>
              <p className="leading-relaxed">
                A atual versão da Política de Privacidade foi formulada e
                atualizada pela última vez em: 17/12/2022.
              </p>
              <p className="leading-relaxed">
                Reservamos o direito de modificar essa Política de Privacidade a
                qualquer tempo, principalmente em função da adequação a eventuais
                alterações feitas em nosso site ou em âmbito legislativo.
                Recomendamos que você a revise com frequência.
              </p>
              <p className="leading-relaxed">
                Eventuais alterações entrarão em vigor a partir de sua
                publicação em nosso site e sempre que houver novo acesso ao site,
                você será notificado acerca das mudanças ocorridas.
              </p>
              <p className="leading-relaxed">
                Ao utilizar nossos serviços e fornecer seus dados pessoais após
                tais modificações, você às consente.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                10. Responsabilidade
              </h2>
              <p className="leading-relaxed">
                A Rodobras prevê a responsabilidade dos agentes que atuam nos
                processos de tratamento de dados, em conformidade com os artigos
                42 ao 45 da Lei Geral de Proteção de Dados.
              </p>
              <p className="leading-relaxed">
                Nos comprometemos em manter esta Política de Privacidade
                atualizada, observando suas disposições e zelando por seu
                cumprimento. Além disso, também assumimos o compromisso de buscar
                condições técnicas e organizativas seguras aptas a proteger todo
                o processo de tratamento de dados.
              </p>
              <p className="leading-relaxed">
                Caso a Autoridade Nacional de Proteção de Dados exija a adoção
                de providências em relação ao tratamento de dados realizado pela
                Rodobras, comprometemo-nos a segui-las.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">
                10.1 Isenção de responsabilidade
              </h3>
              <p className="leading-relaxed">
                Conforme mencionado no Tópico 6, embora adotemos elevados
                padrões de segurança a fim de evitar incidentes, não há nenhuma
                página virtual inteiramente livre de riscos. Nesse sentido, a
                Rodobras não se responsabiliza por:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>I</strong> – Quaisquer consequências decorrentes da
                  negligência, imprudência ou imperícia dos usuários em relação a
                  seus dados individuais. Garantimos e nos responsabilizamos
                  apenas pela segurança dos processos de tratamento de dados e
                  do cumprimento das finalidades descritas no presente
                  instrumento. Destacamos que a responsabilidade em relação à
                  confidencialidade dos dados de acesso é do usuário/cliente.
                </li>
                <li>
                  <strong>II</strong> – Ações maliciosas de terceiros, como
                  ataques de hackers, exceto se comprovada conduta culposa ou
                  deliberada da Rodobras. Destacamos que em caso de incidentes
                  de segurança que possam gerar risco ou dano relevante para você
                  ou qualquer um de nossos usuários/clientes, comunicaremos aos
                  afetados e à Autoridade Nacional de Proteção de Dados sobre o
                  ocorrido e cumpriremos as providências necessárias.
                </li>
                <li>
                  <strong>III</strong> – Inveracidade das informações inseridas
                  pelo usuário/cliente nos registros necessários para a
                  utilização dos serviços da Rodobras; quaisquer consequências
                  decorrentes de informações falsas ou inseridas de má-fé são de
                  inteiramente responsabilidade do usuário/cliente.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                11. Encarregado de Proteção de Dados
              </h2>
              <p className="leading-relaxed">
                Caso haja necessidade de contato com a Rodobras para exercer
                qualquer direito, o usuário/cliente poderá entrar em contato
                através do e-mail{" "}
                <a
                  href="mailto:adm@rodobrasguindastes.com.br"
                  className="font-medium text-primary hover:underline"
                >
                  adm@rodobrasguindastes.com.br
                </a>
                .
              </p>
            </section>

            {/* ANEXO I - Política de Cookies */}
            <section className="border-t border-border pt-10 mt-12 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                ANEXO I – Política de Cookies
              </h2>
              <p className="leading-relaxed">
                Esta Política de Cookies faz parte da Política de privacidade da
                Rodobras Guindastes & Muncks LTDA., sendo um documento
                complementar àquela. Neste documento estão informações objetivas
                e claras sobre o que são Cookies, quais Cookies utilizamos em
                nossas aplicações, qual papel desempenham e como configurá-los.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">
                1. O que são Cookies?
              </h3>
              <p className="leading-relaxed">
                Cookies são pequenos arquivos de texto ou fragmentos de
                informação que são baixados em seu computador, smartphone ou
                qualquer outro dispositivo com acesso à internet quando você
                visita nosso site. Eles contêm informações sobre a sua
                navegação em nossas páginas e retêm apenas informações
                relacionadas às suas preferências. Assim, essa página consegue
                armazenar e recuperar os dados sobre os seus hábitos de
                navegação, de forma a melhorar a experiência de uso, por
                exemplo. É importante frisar que eles não contêm informações
                pessoais específicas, como dados sensíveis ou bancários. O seu
                navegador armazena os cookies no disco rígido, mas ocupam um
                espaço de memória mínimo, que não afetam o desempenho do seu
                computador. A maioria das informações são apagadas logo ao
                encerrar a sessão.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">
                2. Por que usamos Cookies?
              </h3>
              <p className="leading-relaxed">
                A Rodobras utiliza Cookies para fornecer a melhor experiência de
                uso aos seus usuários, tornando nossas aplicações mais fáceis e
                personalizadas, tendo por base suas escolhas e comportamento de
                navegação. Assim, buscamos entender como você utiliza nosso site
                e suas aplicações, e com isso, como podemos ajustar o conteúdo
                para torná-lo mais relevante para você, além de lembrar de suas
                preferências. Os Cookies participam deste processo justamente
                porque são eles que armazenam, leem e executam os dados
                necessários para cumprir com o nosso objetivo.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">
                3. Tipos de Cookies
              </h3>
              <p className="leading-relaxed">
                Os cookies, quanto a seus proprietários, podem ser: Cookies de
                proprietários (definidos por nós ou por terceiros em nosso
                nome); Cookies de terceiros (definidos por terceiros confiáveis
                em nosso site). Quanto ao tempo de vida: Cookies de sessão ou
                temporários (expiram ao fechar o navegador); Cookies persistentes
                ou permanentes (permanecem no dispositivo por período
                determinado). Quanto à finalidade: Cookies necessários
                (essenciais para navegação); Cookies de desempenho; Cookies de
                publicidade; Cookies de funcionalidade.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">
                4. Que tipo de Cookies utilizamos? / Gerenciamento dos Cookies
              </h3>
              <p className="leading-relaxed">
                A Rodobras utiliza todos os tipos de cookies listados acima. A
                instalação dos cookies está sujeita ao seu consentimento. Na
                primeira vez que você acessar nossas aplicações, será requerida
                a sua concordância com a instalação destes. Você pode, a
                qualquer tempo e sem nenhum custo, alterar as permissões,
                bloquear ou recusar os Cookies. Para gerenciar os cookies do seu
                navegador, basta fazê-lo diretamente nas configurações do
                navegador, na área de gestão de Cookies.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">
                5. Disposições finais (Cookies)
              </h3>
              <p className="leading-relaxed">
                Reservamo-nos o direito de alterar esta Política de Cookies a
                qualquer tempo. Esta Política de Cookies foi atualizada pela
                última vez: 17/12/2022.
              </p>
            </section>

            <section className="border-t border-border pt-10 mt-12 space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                COOKIES – O QUE FAREMOS COM ESTA INFORMAÇÃO?
              </h2>
              <p className="leading-relaxed">
                Quando você realiza alguma transação com nossa empresa, como
                parte do processo de locação e/ou compra e venda, coletamos as
                informações pessoais que você nos dá tais como: nome, e-mail e
                endereço. Quando você acessa nosso site, também recebemos
                automaticamente o protocolo de internet do seu computador,
                endereço de IP, porta TCP e cabeçalho HTTP user-agent. E-mail
                Marketing será realizado apenas caso você permita.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">
                CONSENTIMENTO
              </h3>
              <p className="leading-relaxed">
                Quando você fornece informações pessoais para completar uma
                transação, verificar seu cartão de crédito, fazer um pedido,
                providenciar uma entrega ou retornar uma compra, entendemos que
                você está de acordo com a coleta de dados. Se pedimos por suas
                informações pessoais por uma razão secundária, como marketing,
                vamos lhe pedir diretamente por seu consentimento. Para retirar
                seu consentimento, entre em contato em{" "}
                <a
                  href="mailto:adm@rodobrasguindastes.com.br"
                  className="font-medium text-primary hover:underline"
                >
                  adm@rodobrasguindastes.com.br
                </a>{" "}
                ou envie correspondência para: Rodobras Guindastes & Muncks LTDA
                com sede na Rua Paula Ramos, n° 702, Coqueiros, Sala 1601, CEP:
                88080-401, Florianópolis – SC.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">
                DIVULGAÇÃO / SERVIÇOS DE TERCEIROS / LINKS / SEGURANÇA
              </h3>
              <p className="leading-relaxed">
                Podemos divulgar suas informações pessoais caso sejamos obrigados
                pela lei ou se você violar nossos Termos de Serviço. Os
                fornecedores terceirizados coletam, usam e divulgam suas
                informações na medida do necessário. Ao deixar nosso site ou ser
                redirecionado para site de terceiros, você não será mais regido
                por esta Política. Não somos responsáveis pelas práticas de
                privacidade de outros sites. Tomamos precauções para proteger
                suas informações pessoais.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">
                ALTERAÇÕES PARA ESSA POLÍTICA DE PRIVACIDADE
              </h3>
              <p className="leading-relaxed">
                Reservamos o direito de modificar essa política de privacidade a
                qualquer momento. Alterações e esclarecimentos surtem efeito
                imediatamente após sua publicação no site. Se nossa empresa for
                adquirida ou fundida com outra empresa, suas informações podem
                ser transferidas para os novos proprietários. Este documento é
                válido a partir do dia 01/01/2023.
              </p>
            </section>
          </div>

          <footer className="mt-12 border-t border-border pt-8">
            <Link
              href="/"
              className="text-sm font-medium text-primary hover:underline"
            >
              ← Voltar ao site
            </Link>
          </footer>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
