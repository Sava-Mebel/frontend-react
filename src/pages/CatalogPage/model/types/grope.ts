export interface CatalogGroupType {
  id: number;
  pageName: string;
  groupId: string;
  title: string;
  description: string;
  type:
    | 'kitchen'
    | 'hallway'
    | 'wardrobe'
    | 'bedroom'
    | 'storage'
    | 'workspace'
    | 'bathroom'
    | 'dining'
    | 'other';
}

export const CatalogGroupMocked: CatalogGroupType[] = [
  {
    id: 1,
    pageName: 'Кухонный гарнитур',
    groupId: '/catalog/group/kitchen-sets',
    title: 'Кухонные гарнитуры на заказ',
    description: 'Широкий выбор кухонных гарнитуров по индивидуальным размерам и дизайну.',
    type: 'kitchen',
  },
  {
    id: 2,
    pageName: 'Прихожие',
    groupId: '/catalog/group/hallways',
    title: 'Мебель для прихожей',
    description: 'Стильные прихожие, шкафы-купе и гардеробные системы для вашего дома.',
    type: 'hallway',
  },
  {
    id: 3,
    pageName: 'Распашные шкафы',
    groupId: '/catalog/group/swing-wardrobes',
    title: 'Распашные шкафы на заказ',
    description: 'Классические и современные распашные шкафы с удобной системой хранения.',
    type: 'wardrobe',
  },
  {
    id: 4,
    pageName: 'Шкафы Купе',
    groupId: '/catalog/group/sliding-wardrobes',
    title: 'Шкафы-купе по индивидуальным размерам',
    description: 'Эргономичные шкафы-купе с раздвижными дверями и продуманным наполнением.',
    type: 'wardrobe',
  },
  {
    id: 5,
    pageName: 'Шкаф кровать',
    groupId: '/catalog/group/wardrobe-bed',
    title: 'Шкафы-кровати с механизмом подъема',
    description: 'Удобные трансформируемые шкафы-кровати для экономии пространства.',
    type: 'bedroom',
  },
  {
    id: 6,
    pageName: 'Гардеробные',
    groupId: '/catalog/group/dressing-rooms',
    title: 'Гардеробные системы',
    description: 'Индивидуальные гардеробные комнаты и системы хранения для вашего дома.',
    type: 'storage',
  },
  {
    id: 7,
    pageName: 'Рабочие зоны у окна',
    groupId: '/catalog/group/window-workspaces',
    title: 'Рабочие столы у окна',
    description: 'Удобные и функциональные рабочие зоны с естественным освещением.',
    type: 'workspace',
  },
  {
    id: 8,
    pageName: 'Зеркала с подвесными тумбами',
    groupId: '/catalog/group/mirrors-with-cabinets',
    title: 'Зеркала с тумбами для прихожей',
    description: 'Стильные зеркала с подвесными тумбами для удобного хранения мелочей.',
    type: 'hallway',
  },
  {
    id: 9,
    pageName: 'Мебель для ванной / туалета',
    groupId: '/catalog/group/bathroom-furniture',
    title: 'Мебель для ванной комнаты',
    description: 'Влагостойкая мебель для ванной и туалета: тумбы, шкафы, полки.',
    type: 'bathroom',
  },
  {
    id: 10,
    pageName: 'Мебель для спальни',
    groupId: '/catalog/group/bedroom-furniture',
    title: 'Мебель для спальни на заказ',
    description: 'Кровати, шкафы, комоды и туалетные столики в едином стиле.',
    type: 'bedroom',
  },
  {
    id: 11,
    pageName: 'Мебель для столовой',
    groupId: '/catalog/group/dining-room-furniture',
    title: 'Обеденные группы и буфеты',
    description: 'Уютные столовые гарнитуры и серванты для семейных обедов.',
    type: 'dining',
  },
  {
    id: 12,
    pageName: 'Другая мебель',
    groupId: '/catalog/group/other-furniture',
    title: 'Эксклюзивная мебель на заказ',
    description: 'Нестандартные решения для интерьера: ниши, стеллажи, мебель под заказ.',
    type: 'other',
  },
];
