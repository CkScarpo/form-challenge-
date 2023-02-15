interface PropType {
  infosPropriedade: {
    id: number,
    nome: string,
  },
  cnpj: string
}

export const dataProp: readonly PropType[] = [
  {
    infosPropriedade: {
      id: 1,
      nome: 'Agrotis 1',
    },
    cnpj: '04.909.987/0001-89'
  },
  {
    infosPropriedade: {
      id: 2,
      nome: 'Agrotis 2',
    },
    cnpj: '04.909.987/0001-87'
  },
  {
    infosPropriedade: {
      id: 2,
      nome: 'Agrotis 3',
    },
    cnpj: '04.909.987/0001-86'
  },
  {
    infosPropriedade: {
      id: 2,
      nome: 'Agrotis 4',
    },
    cnpj: '04.909.987/0001-85'
  },
  {
    infosPropriedade: {
      id: 2,
      nome: 'Agrotis 5',
    },
    cnpj: '04.909.987/0001-84'
  },
];