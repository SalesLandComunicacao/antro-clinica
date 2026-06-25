export const brand = {
  whatsapp: "5585981850390",
  whatsappDisplay: "(85) 98185-0390",
  instagram: "https://www.instagram.com/anbro.hof/",
  cursosUrl: "https://cursos.anbro.com.br",
};

export function waLink(message: string) {
  return `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const procedures = [
  {
    slug: "botox",
    name: "Toxina Botulínica",
    short: "Botox",
    description:
      "Suaviza linhas de expressão preservando a naturalidade. Aplicação individualizada para cada anatomia.",
    indications: ["Rugas dinâmicas", "Linhas finas"],
  },
  {
    slug: "preenchimento",
    name: "Preenchimento com Ácido Hialurônico",
    short: "Preenchimento",
    description:
      "Volume, projeção e contorno em pontos estratégicos da face. Mapeamento individualizado — do terço médio à mandíbula, passando por regiões delicadas como olheiras e rinomodelação não cirúrgica.",
    indications: [
      "Olheiras",
      "Rinomodelação",
      "Região paranasal",
      "Fossa piriforme",
      "Malar / maçãs",
      "Sulco nasolabial",
      "Lábios",
      "Sulco labiomarginal",
      "Mento",
      "Mandíbula",
    ],
  },
  {
    slug: "bioestimuladores",
    name: "Bioestimuladores de Colágeno",
    short: "Bioestimuladores",
    description:
      "Hidroxiapatita de Cálcio e PLLA: estimulam colágeno e reorganizam estruturas profundas, com efeito progressivo.",
    indications: ["Flacidez facial", "Definição de contorno", "Rejuvenescimento"],
  },
  {
    slug: "fios-pdo",
    name: "Fios de PDO",
    short: "Fios de PDO",
    description:
      "Lifting não cirúrgico com fios absorvíveis. Suporte estrutural e estímulo de colágeno.",
    indications: ["Lifting de face", "Definição de mandíbula", "Pescoço", "Flacidez", "Fox eyes", "Rinomodelação"],
  },
  {
    slug: "ultraformer-mpt",
    name: "Ultraformer MPT",
    short: "Ultraformer",
    description:
      "Ultrassom micro e macrofocado de alta intensidade. Contração de colágeno em camadas profundas sem cirurgia.",
    indications: ["Flacidez", "Lifting não invasivo", "Definição de ângulos faciais"],
  },
  {
    slug: "laser-laveen",
    name: "Laser Laveen",
    short: "Laser Laveen",
    description:
      "Laser não ablativo para rejuvenescimento, manchas e textura. Recuperação rápida, resultado consistente.",
    indications: ["Manchas", "Textura", "Brilho", "Pequenas cicatrizes"],
  },
  {
    slug: "skinbooster",
    name: "Skinbooster & Intradermoterapia",
    short: "Skinbooster",
    description:
      "Hidratação profunda da pele e melhora de textura com ativos injetáveis. Aspecto luminoso e firme — sem alterar volume.",
    indications: ["Hidratação", "Textura", "Viço", "Linhas finas"],
  },
  {
    slug: "peeling",
    name: "Peeling",
    short: "Peeling",
    description:
      "Renovação controlada da pele para uniformizar tom, suavizar manchas e devolver luminosidade. Protocolo individualizado ao seu fototipo.",
    indications: ["Manchas", "Melasma", "Textura", "Renovação celular"],
  },
  {
    slug: "microagulhamento",
    name: "Microagulhamento",
    short: "Microagulhamento",
    description:
      "Indução de colágeno e melhora de textura, poros e cicatrizes. Pode ser combinado com ativos específicos.",
    indications: ["Poros", "Cicatrizes de acne", "Textura"],
  },
] as const;

export const differentials = [
  {
    title: "Conduzido por professores universitários",
    body: "Quem te atende é a mesma equipe que forma os especialistas em harmonização orofacial no Ceará — mestres, doutores e pesquisadores da área.",
  },
  {
    title: "Resultado natural, sempre",
    body: "Planejamento individual baseado em análise facial. Nenhum protocolo de prateleira — cada paciente é único.",
  },
  {
    title: "Produtos premium",
    body: "Trabalhamos apenas com marcas consagradas e referência mundial. Você sabe exatamente o que está aplicando.",
  },
  {
    title: "Sem amarras de marca",
    body: "Independência para escolher o melhor para cada caso, sem comissionamento ou pressão de fornecedores.",
  },
];

export const teachers = [
  {
    slug: "bruno-frota",
    name: "Bruno Frota",
    photo: "/professores/bruno.jpg",
    titles: [
      "Pós-graduado em Implantodontia e Harmonização Orofacial",
      "Especialista em Cirurgia e Traumatologia Bucomaxilofacial",
      "Mestre em Ciências Médicas · Doutorando em Ciências Farmacêuticas",
      "Professor da UNIFOR e da Clinicare Training",
    ],
  },
  {
    slug: "andre-viana",
    name: "André Viana",
    photo: "/professores/andre.jpg",
    titles: [
      "Especialista em Harmonização Orofacial e Oncologia",
      "Mestre e Doutor em Farmacologia",
      "Professor da UNIFOR e da Clinicare Training",
    ],
  },
  {
    slug: "romulo-medeiros",
    name: "Rômulo Medeiros",
    photo: "/professores/romulo.jpg",
    titles: [
      "Residência em Cirurgia e Traumatologia Bucomaxilofacial",
      "Mestre e Doutor em Odontologia",
      "Pós-graduado em Harmonização Orofacial",
      "Professor da UNIFOR e da Clinicare Training",
    ],
  },
] as const;

export const locations = [
  {
    slug: "unifor",
    name: "Clínica de Odontologia · UNIFOR",
    photo: "/locais/unifor.jpg",
    address: "Bloco O — Av. Valmir Pontes, s/n · próximo ao INSS, Fortaleza/CE",
    tagline: "Realize seu procedimento na melhor universidade do Norte-Nordeste, sob supervisão da Anbro.",
    note: "Atendimento realizado pelos alunos da turma de especialização em Harmonização Orofacial da UNIFOR, com supervisão direta dos professores Anbro — Bruno Frota, André Viana e Rômulo Medeiros.",
  },
  {
    slug: "clinicare",
    name: "Clinicare Training",
    photo: "/locais/clinicare.jpg",
    address: "R. Tomás Acioli, 1069 — Joaquim Távora, Fortaleza/CE · 60135-180",
    tagline: "Centro de treinamento de referência, em parceria com a Anbro.",
    note: "Atendimento realizado pelos alunos da pós-graduação em Harmonização Orofacial da Clinicare Training, com supervisão direta dos professores Anbro — Bruno Frota, André Viana e Rômulo Medeiros.",
  },
];
