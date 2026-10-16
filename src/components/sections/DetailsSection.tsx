import { Box, Typography } from "@mui/material";

import { SectionBox } from "@common";

interface DetailsSectionProps {
  title?: string;
}

export function DetailsSection({
  title = "Mais detalhes",
}: DetailsSectionProps) {
  return (
    <SectionBox
      id="detalhes"
      title={title}
      backgroundColor="primary.main"
      textColor="primary.contrastText"
    >
      {/* <Typography variant="body1" component="p" sx={{ textAlign: "center" }}>
        Detalhes...
      </Typography> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
          textAlign: "justify",
          maxWidth: "730px",
        }}
      >
        <Typography>
          Olá, sou o Bruno Deonato, e gostaria de explicar um pouco sobre o meu
          quadro clínico.
        </Typography>

        <Typography>
          Sou PCD Baixa Visão devido ao glaucoma e também a um transplante de
          córneas que teve uma pequena intercorrência. A minha visão é limitada
          (tubular, não tenho visão periférica) e também embaçada (após 50 cm de
          distância, ela fica sem nitidez e sem contraste).
        </Typography>

        <Box>
          <Typography variant="h6" component="p">
            Sobre o Glaucoma e o dreno que utilizo dentro do olho:
          </Typography>
          <Typography>
            Glaucoma é uma doença dos olhos que danifica o nervo óptico,
            geralmente por aumento da pressão intraocular, podendo levar à perda
            de visão. A cirurgia com dreno (implante de drenagem) coloca um
            pequeno tubo no olho para criar uma nova saída do líquido ocular,
            reduzindo a pressão e evitando mais danos.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="p">
            Sobre o transplante de córneas:
          </Typography>
          <Typography>
            A córnea é a camada transparente que cobre a parte da frente do olho
            (como uma “janela”), ajudando a focar a luz para formar a visão. O
            transplante de córnea é uma cirurgia em que a córnea danificada ou
            doente é substituída por uma córnea saudável de um doador. Isso pode
            recuperar ou melhorar a visão quando há cicatrizes, doenças ou
            lesões que atrapalham a transparência da córnea.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" component="p">
            O que está acontecendo comigo?
          </Typography>
          <Typography>
            Recentemente em uma consulta, foi constatado que o dreno do meu olho
            esquerdo está exposto (como se fosse uma ferida aberta), e por isso,
            eu preciso fazer uma cirurgia reparadora para evitar uma infecção e
            também que a pressão do olho aumente. Além disso, a córnea do olho
            direito tem ficado com um quadro clínico mais sensível, deixando
            minha visão ainda mais baixa.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" component="p">
            O que fazer?
          </Typography>
          <Typography>
            Preciso fazer o quanto antes uma cirurgia para reparar este dreno no
            olho esquerdo e evitar a infecção. É indicado também o transplante
            de córneas no olho direito, buscando a melhoria da visão e da
            qualidade de vida.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" component="p">
            Onde será feita a cirurgia?
          </Typography>
          <Typography>
            O Hospital BOS – Banco de Olhos de Sorocaba é uma instituição
            filantrópica referência mundial em oftalmologia, localizada em
            Sorocaba (SP), conhecida principalmente pela captação e transplante
            de córneas e pelo atendimento especializado em saúde ocular. A
            cirurgia do dreno será feita pelo Dr. Rodrigo Favoretto Peccini
            (especialista em glaucoma) e a cirurgia de transplante de córneas
            pelo Dr. Nicolas Cesário Pereira (especialista em córneas e
            transplante).
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" component="p">
            Custo / investimento:
          </Typography>
          <Typography>
            Para realizar ambas as cirurgias, será necessário um valor de
            R$100mil reais.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" component="p">
            Como você pode ajudar?
          </Typography>
          <Typography>
            <Typography fontWeight="bold" component="span">
              Orações:
            </Typography>{" "}
            cremos no poder da oração e no agir sobrenatural do Senhor. Além
            disso, a oração é a ponte invisível que fortalece o coração, acalma
            a mente e renova a esperança. Seja inspirado pelo versículo de
            Filipenses 4.6-7 e ore comigo pela minha saúde!
          </Typography>
          <Typography>
            <Typography fontWeight="bold" component="span">
              Vaquinha financeira:
            </Typography>{" "}
            no momento, não tenho condições para pagar a cirurgia. Por isso,
            estou levantando os recursos através de uma vaquinha. Você pode
            contribuir pela chave Pix f746d9d8-8497-4a9b-8da5-d1e53cd461f9
            (chave aleatória, banco Caixa Econômica) ou me procurar para mais
            detalhes.
          </Typography>
          <Typography>
            <Typography fontWeight="bold" component="span">
              Tamo junto!:
            </Typography>{" "}
            comunhão é uma parte muito importante da nossa vida, e ajuda demais
            no renovo e no fortalecimento. Café, ligação, mensagem, tudo isso é
            importante... e não é carência, mas sim entender que um corpo é
            feito de vários membros.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" component="p">
            Ficou com alguma dúvida?
          </Typography>
          <Typography>
            Pode me chamar pelo Instagram, ou podemos marcar um café... Estou
            disposto a conversar e te responder todas as dúvidas.
          </Typography>
          <Typography>Vamos pra cima!</Typography>
        </Box>

        <Box>
          <Typography>Muito obrigado por tudo!</Typography>
          <Typography>Deus abençoe.</Typography>
        </Box>

        <Box>
          <Typography>Bruno Deonato</Typography>
          <Typography>@brunodeonato</Typography>
        </Box>
      </Box>
    </SectionBox>
  );
}
