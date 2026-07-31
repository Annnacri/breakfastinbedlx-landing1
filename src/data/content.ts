import { Product, Review, FAQItem } from '../types';
import pastelDeBacalhauImg from '../assets/images/pastel_de_bacalhau_1785329795162.jpg';
import menuPortuguesImg from '../assets/images/menu_portugues_1785336055571.jpg';
import cardapioDeVeraoImg from '../assets/images/cardapio_de_verao_1785336113902.jpg';
import bifanaPortuguesaImg from '../assets/images/bifana_portuguesa_1785336210859.jpg';
import pregoNoPaoImg from '../assets/images/prego_no_pao_1785336300000_1785336275069.jpg';
import rissolDeLeitaoImg from '../assets/images/rissol_de_leitao_1785336352748.jpg';
import croqueteDeVitelaImg from '../assets/images/croquete_de_vitela_1785336420717.jpg';
import pastelDeNataImg from '../assets/images/pastel_de_nata_1785336735037.jpg';

export const HERO_IMAGE = 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=80';
export const BALCONY_IMAGE = 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80';

export const PRODUCTS: Product[] = [
  // 1. Menu Vitamina C - 10.90€
  {
    id: 'menu-vitamina-c',
    price: 10.90,
    servings: '1 Pessoa',
    isBestseller: true,
    category: 'breakfast_box',
    imageUrl: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=800&q=80',
    name: {
      en: 'Menu Vitamina C',
      pt: 'Menu Vitamina C',
      es: 'Menu Vitamina C',
      fr: 'Menu Vitamina C',
      de: 'Menu Vitamina C',
      it: 'Menu Vitamina C'
    },
    description: {
      en: 'A refreshing burst of citrus energy. Enjoy fresh orange juice, homemade orange roll, savory mushroom quiche, and croissants with cottage cheese & kiwi.',
      pt: 'Uma explosão refrescante de energia cítrica. Desfrute de sumo de laranja fresco, torta de laranja caseira, quiche de cogumelos e croissants recheados com queijo cottage e kiwi.',
      es: 'Una explosión refrescante de energía cítrica. Disfruta de zumo de naranja fresco, tarta de naranja casera, quiche de champiñones y croissants rellenos de queso cottage y kiwi.',
      fr: 'Une explosion rafraîchissante d’énergie vitaminée. Dégustez un jus d’orange frais, un roulé à l’orange maison, une quiche aux champignons et des croissants garnis de fromage cottage et kiwi.',
      de: 'Ein erfrischender Vitamin-Schub. Genießen Sie frischen Orangensaft, hausgemachte Orangenrolle, Pilz-Quiche und Croissants gefüllt mit Hüttenkäse und Kiwi.',
      it: 'Un’esplosione rinfrescante di energia vitaminica. Gusta spremuta d’arancia fresca, torta all’arancia fatta in casa, quiche ai funghi e croissant ripieni di fiocchi di latte e kiwi.'
    },
    itemsIncluded: {
      en: [
        'Fresh orange juice',
        'Homemade orange roll',
        'Mushroom quiche',
        'Croissants stuffed with cottage cheese and kiwi'
      ],
      pt: [
        'Sumo de laranja',
        'Torta de laranja caseira',
        'Quiche de cogumelos',
        'Croissants recheados com queijo cottage e kiwi'
      ],
      es: [
        'Zumo de naranja',
        'Tarta de naranja casera',
        'Quiche de champiñones',
        'Croissants rellenos de queso cottage y kiwi'
      ],
      fr: [
        'Jus d’orange',
        'Roulé à l’orange maison',
        'Quiche aux champignons',
        'Croissants garnis de fromage cottage et kiwi'
      ],
      de: [
        'Frischer Orangensaft',
        'Hausgemachte Orangenrolle',
        'Pilz-Quiche',
        'Croissants gefüllt mit Hüttenkäse und Kiwi'
      ],
      it: [
        'Spremuta d’arancia',
        'Torta all’arancia fatta in casa',
        'Quiche ai funghi',
        'Croissant ripieni di fiocchi di latte e kiwi'
      ]
    }
  },

  // 2. Menu Português - 9.90€
  {
    id: 'menu-portugues',
    price: 9.90,
    servings: '1 Pessoa',
    isBestseller: true,
    category: 'breakfast_box',
    imageUrl: menuPortuguesImg,
    name: {
      en: 'Menu Português',
      pt: 'Menu Português',
      es: 'Menu Português',
      fr: 'Menu Português',
      de: 'Menu Português',
      it: 'Menu Português'
    },
    description: {
      en: 'The traditional Portuguese morning taste. Includes chocolate milk, mixed grain bread with cured ham, codfish fritter, and a warm pastel de nata.',
      pt: 'O sabor tradicional da manhã portuguesa. Inclui leite com chocolate, pão de mistura com presunto, pastel de bacalhau e pastel de nata.',
      es: 'El sabor tradicional de la mañana portuguesa. Incluye leche con chocolate, pan de mezcla con jamón serrano, pastel de bacalao y pastel de nata.',
      fr: 'La tradition du matin portugais. Comprend du lait au chocolat, du pain complet au jambon cru, un pastel de bacalhau et un pastel de nata.',
      de: 'Der traditionelle portugiesische Geschmack am Morgen. Enthält Schokoladenmilch, Mischbrot mit Schinken, Kabeljau-Bällchen und Pastel de Nata.',
      it: 'Il sapore tradizionale del mattino portoghese. Include latte al cioccolato, pane ai cereali con prosciutto, pastel de bacalhau e pastel de nata.'
    },
    itemsIncluded: {
      en: [
        'Chocolate milk',
        'Mixed grain bread with cured ham',
        'Pastel de bacalhau',
        'Pastel de nata'
      ],
      pt: [
        'Leite com chocolate',
        'Pão de mistura c/ presunto',
        'Pastel de bacalhau',
        'Pastel de nata'
      ],
      es: [
        'Leche con chocolate',
        'Pan de mezcla c/ jamón',
        'Pastel de bacalhau',
        'Pastel de nata'
      ],
      fr: [
        'Lait au chocolat',
        'Pain complet c/ jambon',
        'Pastel de bacalhau',
        'Pastel de nata'
      ],
      de: [
        'Schokoladenmilch',
        'Mischbrot c/ Schinken',
        'Pastel de bacalhau',
        'Pastel de nata'
      ],
      it: [
        'Latte al cioccolato',
        'Pane ai cereali c/ prosciutto',
        'Pastel de bacalhau',
        'Pastel de nata'
      ]
    }
  },

  // 3. Menu Brunch - 15.90€
  {
    id: 'menu-brunch',
    price: 15.90,
    servings: '1-2 Pessoas',
    isBestseller: true,
    category: 'breakfast_box',
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    name: {
      en: 'Menu Brunch',
      pt: 'Menu Brunch',
      es: 'Menu Brunch',
      fr: 'Menu Brunch',
      de: 'Menu Brunch',
      it: 'Menu Brunch'
    },
    description: {
      en: 'A complete Portuguese brunch feast with orange juice, scrambled eggs with farinheira, mini toasts, rissol de camarão, rissol de leitão, sardine pate, and homemade apple tart.',
      pt: 'Um banquete completo de brunch português com sumo de laranja, ovos mexidos com farinheira, mini tostas, rissol de camarão, rissol de leitão, patê de sardinha e tarte caseira de maçã.',
      es: 'Un banquete completo de brunch portugués con zumo de naranja, huevos revueltos con farinheira, mini tostadas, rissol de camarones, rissol de cochinillo, paté de sardina y tarta casera de manzana.',
      fr: 'Un brunch portugais complet avec jus d’orange, œufs brouillés à la farinheira, mini toasts, rissol aux crevettes, rissol au cochon de lait, pâté de sardine et tarte aux pommes maison.',
      de: 'Ein kompletter portugiesischer Brunch mit Orangensaft, Rührei mit Farinheira-Wurst, Mini-Toasts, Garnelen-Rissol, Spanferkel-Rissol, Sardinen-Paté und hausgemachtem Apfelkuchen.',
      it: 'Un brunch portoghese completo con spremuta d’arancia, uova strapazzate con farinheira, mini toast, rissol di gamberi, rissol di maialino, paté di sardina e torta di mele fatta in casa.'
    },
    itemsIncluded: {
      en: [
        'Fresh orange juice',
        'Scrambled eggs with farinheira sausage',
        'Mini toasts',
        'Shrimp rissol',
        'Roast suckling pig rissol (Rissol de leitão)',
        'Sardine pate',
        'Homemade apple tart'
      ],
      pt: [
        'Sumo de laranja',
        'Ovos mexidos com farinheira',
        'Mini tostas',
        'Rissol de camarão',
        'Rissol de leitão',
        'Patê de sardinha',
        'Tarte caseira de maçã'
      ],
      es: [
        'Zumo de naranja',
        'Huevos revueltos con farinheira',
        'Mini tostadas',
        'Rissol de camarão',
        'Rissol de leitão',
        'Paté de sardinha',
        'Tarta casera de maçã'
      ],
      fr: [
        'Jus d’orange',
        'Œufs brouillés à la farinheira',
        'Mini toasts',
        'Rissol de camarão',
        'Rissol de leitão',
        'Pâté de sardinha',
        'Tarte caseira de maçã'
      ],
      de: [
        'Orangensaft',
        'Rührei mit Farinheira',
        'Mini Toasts',
        'Rissol de camarão',
        'Rissol de leitão',
        'Patê de sardinha',
        'Tarte caseira de maçã'
      ],
      it: [
        'Spremuta d’arancia',
        'Uova strapazzate con farinheira',
        'Mini toast',
        'Rissol de camarão',
        'Rissol de leitão',
        'Patê de sardinha',
        'Tarte caseira de maçã'
      ]
    }
  },

  // 4. Menu Summer - 10.90€
  {
    id: 'cardapio-de-verao',
    price: 10.90,
    servings: '1 Pessoa',
    isBestseller: false,
    category: 'breakfast_box',
    imageUrl: cardapioDeVeraoImg,
    name: {
      en: 'Menu Summer',
      pt: 'Menu Summer',
      es: 'Menu Summer',
      fr: 'Menu Summer',
      de: 'Menu Summer',
      it: 'Menu Summer'
    },
    description: {
      en: 'Fresh, light, and invigorating for warm days. Includes fresh lemon juice, seasoned fresh cheese, toast with tuna spread and lettuce, and lemon roll.',
      pt: 'Fresco, leve e revigorante para os dias quentes. Inclui sumo de limão fresco, queijo fresco temperado, torrada com pasta de atum e alface e torta de limão.',
      es: 'Fresco, ligero y revigorizante. Incluye zumo de limón fresco, queso fresco sazonado, tostada con pasta de atún y lechuga y tarta de limón.',
      fr: 'Frais, léger et vivifiant. Comprend du jus de citron frais, du fromage frais assaisonné, un toast au thon avec salade et un gâteau au citron.',
      de: 'Frisch, leicht und erfrischend. Enthält frischen Zitronensaft, gewürzten Frischkäse, Toast mit Thunfischcreme und Salat sowie Zitronenrolle.',
      it: 'Fresco, leggero e rigenerante. Include spremuta di limone fresca, formaggio fresco condito, toast con crema di tonno e lattuga e torta al limone.'
    },
    itemsIncluded: {
      en: [
        'Fresh lemon juice',
        'Seasoned fresh cheese',
        'Toast with tuna spread and lettuce',
        'Lemon roll'
      ],
      pt: [
        'Sumo de limão fresco',
        'Queijo fresco temperado',
        'Torrada com pasta de atum e alface',
        'Torta de limão'
      ],
      es: [
        'Zumo de limón fresco',
        'Queso fresco sazonado',
        'Tostada con pasta de atún y lechuga',
        'Torta de limón'
      ],
      fr: [
        'Jus de citron frais',
        'Fromage frais assaisonné',
        'Toast à la pasta de atum e alface',
        'Torta de limão'
      ],
      de: [
        'Frischer Zitronensaft',
        'Gewürzter Frischkäse',
        'Toast mit Thunfisch & Salat',
        'Zitronenrolle'
      ],
      it: [
        'Spremuta di limone fresca',
        'Formaggio fresco condito',
        'Toast con crema di tonno e lattuga',
        'Torta al limone'
      ]
    }
  },

  // 5. Bifana à Portuguesa, no pão - 4.90€
  {
    id: 'bifana-portuguesa',
    price: 4.90,
    servings: '1 Unidade',
    isBestseller: true,
    category: 'savory',
    imageUrl: bifanaPortuguesaImg,
    name: {
      en: 'Bifana à Portuguesa, no pão',
      pt: 'Bifana à Portuguesa, no pão',
      es: 'Bifana à Portuguesa, no pão',
      fr: 'Bifana à Portuguesa, no pão',
      de: 'Bifana à Portuguesa, no pão',
      it: 'Bifana à Portuguesa, no pão'
    },
    description: {
      en: 'The legendary Portuguese pork sandwich. Tender pork marinated with garlic, white wine, and bay leaves, slow-cooked and served warm in rustic bread.',
      pt: 'A lendária sandes de porco portuguesa. Carne de porco macia, marinada com alho, vinho branco e louro, cozinhada lentamente e servida quente num pão rústico.',
      es: 'El legendario bocadillo de cerdo portugués. Carne de cerdo tierna marinada con ajo y vino blanco en pan rústico.',
      fr: 'Le légendaire sandwich au porc portugais servi chaud dans un pain rustique.',
      de: 'Das legendäre portugiesische Schweinefleisch-Sandwich im rustikalen Brötchen.',
      it: 'L’iconico panino al maiale portoghese servito caldo nel panino croccante.'
    },
    itemsIncluded: {
      en: ['1 Traditional Warm Bifana Sandwich in Crusty Bread'],
      pt: ['1 Bifana à Portuguesa Quente no Pão Rústico'],
      es: ['1 Bifana Tradicional Caliente en Pan'],
      fr: ['1 Bifana Chaude dans son Pain Rustique'],
      de: ['1 Heiße portugiesische Bifana im Brötchen'],
      it: ['1 Bifana Tradizionale Calda nel Panino']
    }
  },

  // 6. Prego no pão c/ picles - 4.90€
  {
    id: 'prego-no-pao-com-picles',
    price: 4.90,
    servings: '1 Unidade',
    isBestseller: true,
    category: 'savory',
    imageUrl: pregoNoPaoImg,
    name: {
      en: 'Prego no pão c/ picles',
      pt: 'Prego no pão c/ picles',
      es: 'Prego no pão c/ picles',
      fr: 'Prego no pão c/ picles',
      de: 'Prego no pão c/ picles',
      it: 'Prego no pão c/ picles'
    },
    description: {
      en: 'A Portuguese tavern classic. Extremely tender and juicy beef steak, grilled with garlic and served in warm bread with crunchy pickles.',
      pt: 'Um clássico das cervejarias portuguesas. Bife de novilho extremamente tenro e sumarento, grelhado com alho e servido em pão quente com picles crocantes.',
      es: 'Un clásico de las cervecerías portuguesas. Filete de ternera extremadamente tierno servido en pan caliente con picles.',
      fr: 'Un classique des brasseries portugaises. Steak de veau très tendre servi dans un pain chaud avec pickles.',
      de: 'Klassisches Rindersteak im warmen Brötchen mit Gurken/Picles.',
      it: 'Un classico delle birrerie portoghesi. Bistecca di manzo tenera nel panino caldo con cetriolini.'
    },
    itemsIncluded: {
      en: ['1 Warm Beef Prego Sandwich with Pickles'],
      pt: ['1 Prego no Pão c/ Picles Crocantes'],
      es: ['1 Prego de Ternera con Picles'],
      fr: ['1 Prego au Bœuf avec Pickles'],
      de: ['1 Heiße Rindersteak-Prego im Brötchen mit Gurken'],
      it: ['1 Prego di Manzo Caldo con Cetriolini']
    }
  },

  // 7. Croquete de vitela - 2.20€
  {
    id: 'croquete-de-vitela',
    price: 2.20,
    servings: '1 Unidade',
    isBestseller: false,
    category: 'savory',
    imageUrl: croqueteDeVitelaImg,
    name: {
      en: 'Croquete de vitela',
      pt: 'Croquete de vitela',
      es: 'Croquete de vitela',
      fr: 'Croquete de vitela',
      de: 'Croquete de vitela',
      it: 'Croquete de vitela'
    },
    description: {
      en: 'Crispy on the outside, divinely creamy on the inside. Made with prime veal slow-cooked with Port wine.',
      pt: 'Crocante por fora, divinalmente cremoso por dentro. Elaborado com vitela de primeira qualidade cozinhada lentamente.',
      es: 'Crujiente por fuera, divinamente cremoso por dentro. Elaborado con ternera de primera calidad.',
      fr: 'Croustillant à l’extérieur, divinement crémeux à l’intérieur. Conçu avec du veau de première qualité.',
      de: 'Außen knusprig, innen göttlich cremig. Hergestellt aus erstklassigem Kalbfleisch.',
      it: 'Croccante fuori, divinamente cremoso dentro. Preparato con vitello di prima scelta.'
    },
    itemsIncluded: {
      en: ['1 Golden Veal Croquette'],
      pt: ['1 Croquete de Vitela Dourado e Estaladiço'],
      es: ['1 Croqueta de Ternera Dorada'],
      fr: ['1 Croquette de Veau Croustillante'],
      de: ['1 Goldbraune Kalbskrokette'],
      it: ['1 Crocchetta di Vitello Dorata']
    }
  },

  // 8. Rissol de leitão - 3.90€
  {
    id: 'rissol-de-leitao',
    price: 3.90,
    servings: '1 Unidade',
    isBestseller: true,
    category: 'savory',
    imageUrl: rissolDeLeitaoImg,
    name: {
      en: 'Rissol de leitão',
      pt: 'Rissol de leitão',
      es: 'Rissol de leitão',
      fr: 'Rissol de leitão',
      de: 'Rissol de leitão',
      it: 'Rissol de leitão'
    },
    description: {
      en: 'A premium delicacy. Delicate homemade dough stuffed with shredded roasted suckling pig and a creamy black pepper sauce.',
      pt: 'Uma iguaria premium. Massa caseira delicada recheada com leitão assado desfiado e um molho cremoso condimentado com pimenta preta.',
      es: 'Una delicia premium. Masa casera delicada rellena de cochinillo asado deshilachado.',
      fr: 'Une délicatesse haut de gamme. Pâte artisanale garnie de cochon de lait rôti effiloché.',
      de: 'Eine Premium-Köstlichkeit. Zarter hausgemachter Teig, gefüllt mit Spanferkel.',
      it: 'Una prelibatezza premium. Pasta fatta in casa ripiena di maialino da latte.'
    },
    itemsIncluded: {
      en: ['1 Artisanal Roasted Suckling Pig Rissol'],
      pt: ['1 Rissol Artesanal Recheado com Leitão Assado'],
      es: ['1 Rissol Artesanal de Cochinillo Asado'],
      fr: ['1 Rissol Artisanal au Cochon de Lait Rôti'],
      de: ['1 Handgemachtes Spanferkel-Rissol'],
      it: ['1 Rissol Artigianale di Maialino da Latte']
    }
  },

  // 9. Pastel de nata - 1.80€
  {
    id: 'pastel-de-nata',
    price: 1.80,
    servings: '1 Unidade',
    isBestseller: true,
    category: 'bakery',
    imageUrl: pastelDeNataImg,
    name: {
      en: 'Pastel de nata',
      pt: 'Pastel de nata',
      es: 'Pastel de nata',
      fr: 'Pastel de nata',
      de: 'Pastel de nata',
      it: 'Pastel de nata'
    },
    description: {
      en: 'Portugal’s most famous pastry. Handcrafted with ultra-crispy puff pastry and a caramelized custard filling.',
      pt: 'O doce mais famoso de Portugal. Fabricado artesanalmente com uma massa folhada ultra-estaladiça e recheio cremoso perfeitamente caramelizado.',
      es: 'El dulce más famoso de Portugal. Elaborado artesanalmente con hojaldre crujiente y crema bien caramelizada.',
      fr: 'La pâtisserie la plus célèbre du Portugal. Fabriquée artisanalement avec une pâte feuilletée ultra croustillante.',
      de: 'Portugals berühmtestes Gebäck mit knusprigem Blätterteig und cremig karamellisierter Füllung.',
      it: 'Il dolce più famoso del Portogallo con pasta sfoglia ultra-croccante e ripieno cremoso.'
    },
    itemsIncluded: {
      en: ['1 Fresh Warm Pastel de Nata'],
      pt: ['1 Pastel de Nata Fresco e Quentinho'],
      es: ['1 Pastel de Nata Calientito'],
      fr: ['1 Pastel de Nata Chaud'],
      de: ['1 Frischer warmer Pastel de Nata'],
      it: ['1 Pastel de Nata Caldo']
    }
  },

  // 10. Pastel de bacalhau - 1.90€
  {
    id: 'pastel-de-bacalhau',
    price: 1.90,
    servings: '1 Unidade',
    isBestseller: true,
    category: 'savory',
    imageUrl: pastelDeBacalhauImg,
    name: {
      en: 'Pastel de bacalhau',
      pt: 'Pastel de bacalhau',
      es: 'Pastel de bacalhau',
      fr: 'Pastel de bacalhau',
      de: 'Pastel de bacalhau',
      it: 'Pastel de bacalhau'
    },
    description: {
      en: 'Made with traditionally cured Atlantic codfish, mixed with potatoes, eggs, onions, and fresh parsley, fried to golden perfection.',
      pt: 'Feito com bacalhau do Atlântico de cura tradicional desfiado, misturado com batatas, ovos, cebola e salsa, frito até dourar.',
      es: 'Hecho con bacalao tradicional, patatas, huevos, cebolla y perejil picado, frito hasta dorar.',
      fr: 'Conçu avec de la morue effilochée, mélangée à des pommes de terre, œufs, oignons et persil haché.',
      de: 'Aus traditionellem Kabeljau, Kartoffeln, Eiern, Zwiebeln und Petersilie, goldbraun frittiert.',
      it: 'Fatto con baccalà, patate, uova, cipolle e prezzemolo fresco, fritto a doratura.'
    },
    itemsIncluded: {
      en: ['1 Golden Crisp Codfish Fritter'],
      pt: ['1 Pastel de Bacalhau Dourado e Tradicional'],
      es: ['1 Buñuelo de Bacalao Portugués'],
      fr: ['1 Beignet de Morue Portugais'],
      de: ['1 Goldbraunes Kabeljau-Bällchen'],
      it: ['1 Frittella di Baccalà Portoghese']
    }
  },

  // 11. Coca-Cola - 1.90€
  {
    id: 'coca-cola',
    price: 1.90,
    servings: '330ml',
    isBestseller: false,
    category: 'beverages',
    imageUrl: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    name: {
      en: 'Coca-Cola',
      pt: 'Coca-Cola',
      es: 'Coca-Cola',
      fr: 'Coca-Cola',
      de: 'Coca-Cola',
      it: 'Coca-Cola'
    },
    description: {
      en: 'Classic chilled soda (330ml).',
      pt: 'Refrigerante clássico bem fresco (330ml).',
      es: 'Refresco clásico bien frío (330ml).',
      fr: 'Soda classique bien frais (330ml).',
      de: 'Eiskalter Erfrischungs-Klassiker (330ml).',
      it: 'Bevanda classica fredda (330ml).'
    },
    itemsIncluded: {
      en: ['1 Chilled Coca-Cola Can (330ml)'],
      pt: ['1 Lata de Coca-Cola Fresca (330ml)'],
      es: ['1 Lata de Coca-Cola Fría (330ml)'],
      fr: ['1 Cannette de Coca-Cola Fraîche (330ml)'],
      de: ['1 Gekühlte Dose Coca-Cola (330ml)'],
      it: ['1 Lattina di Coca-Cola (330ml)']
    }
  },

  // 12. Fanta - 1.90€
  {
    id: 'fanta-laranja',
    price: 1.90,
    servings: '330ml',
    isBestseller: false,
    category: 'beverages',
    imageUrl: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=800&q=80',
    name: {
      en: 'Fanta',
      pt: 'Fanta',
      es: 'Fanta',
      fr: 'Fanta',
      de: 'Fanta',
      it: 'Fanta'
    },
    description: {
      en: 'Refreshing orange soda (330ml).',
      pt: 'Refrigerante de laranja fresco (330ml).',
      es: 'Refresco de naranja bien frío (330ml).',
      fr: 'Boisson rafraîchissante à l’orange (330ml).',
      de: 'Erfrischungsgetränk mit Orangengeschmack (330ml).',
      it: 'Bevanda rinfrescante all’arancia (330ml).'
    },
    itemsIncluded: {
      en: ['1 Chilled Fanta Can (330ml)'],
      pt: ['1 Lata de Fanta Fresca (330ml)'],
      es: ['1 Lata de Fanta Fría (330ml)'],
      fr: ['1 Cannette de Fanta Fraîche (330ml)'],
      de: ['1 Gekühlte Dose Fanta (330ml)'],
      it: ['1 Lattina di Fanta (330ml)']
    }
  },

  // 13. Água - 1.50€
  {
    id: 'agua-mineral',
    price: 1.50,
    servings: '500ml',
    isBestseller: false,
    category: 'beverages',
    imageUrl: 'https://images.unsplash.com/photo-1560023907-5f339617ea30?auto=format&fit=crop&w=800&q=80',
    name: {
      en: 'Água',
      pt: 'Água',
      es: 'Água',
      fr: 'Eau',
      de: 'Wasser',
      it: 'Acqua'
    },
    description: {
      en: 'Pure natural mineral water (500ml).',
      pt: 'Água mineral natural pura (500ml).',
      es: 'Agua mineral natural pura (500ml).',
      fr: 'Eau minérale naturelle pure (500ml).',
      de: 'Reines natürliches Mineralwasser (500ml).',
      it: 'Acqua minerale naturale pura (500ml).'
    },
    itemsIncluded: {
      en: ['1 Bottle Mineral Water (500ml)'],
      pt: ['1 Garrafa de Água Natural (500ml)'],
      es: ['1 Botella de Agua Mineral (500ml)'],
      fr: ['1 Bouteille d’Eau Minérale (500ml)'],
      de: ['1 Flasche Mineralwasser (500ml)'],
      it: ['1 Bottiglia di Acqua Minerale (500ml)']
    }
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Sophie & James Miller',
    origin: 'London, UK',
    accommodation: 'Pestana CR7 Hotel, Baixa',
    rating: 5,
    date: 'Julho 2026',
    comment: {
      en: 'Absolute highlight of our Lisbon trip! Ordered Menu Vitamina C & Bifanas for 09:00 AM. Arrived piping hot right at our room door. The Pastéis de Nata were warm and crispy. Unbeatable convenience!',
      pt: 'O grande destaque da nossa viagem a Lisboa! Encomendámos o Menu Vitamina C e Bifanas para as 09:00. Chegou quentinho à porta do quarto. Os Pastéis de Nata estavam perfeitos!',
      es: '¡Lo mejor de nuestro viaje a Lisboa! Pedimos el Menu Vitamina C y Bifanas para las 09:00 AM. Llegó calentito a la puerta. Los Pastéis de Nata estaban crujientes.',
      fr: 'Le clou de notre séjour à Lisbonne ! Livré pile à l’heure devant la porte de notre chambre. Les Pastéis de Nata étaient encore chauds et croustillants !',
      de: 'Absolutes Highlight unserer Lissabon-Reise! Pünktlich um 09:00 Uhr direkt an die Zimmertür geliefert. Warmes Gebäck & fantastischer Saft!',
      it: 'Il momento più bello del nostro viaggio! Consegnato caldissimo alla porta della camera alle 09:00. Pastéis de Nata fantastici!'
    }
  },
  {
    id: 'rev-2',
    author: 'Marc & Elena Vance',
    origin: 'Paris, France',
    accommodation: 'Airbnb Apartment in Alfama',
    rating: 5,
    date: 'Julho 2026',
    comment: {
      en: 'Our Airbnb in Alfama was up 4 flights of stairs with no breakfast nearby. Breakfast in Bed LX delivered right to our door while we were waking up. Sitting on our balcony with Menu Brunch was magical.',
      pt: 'O nosso Airbnb em Alfama ficava num 4º andar sem pequeno-almoço perto. Entregaram à porta enquanto acordávamos. Tomar o Menu Brunch na varanda com sumo fresco foi mágico.',
      es: 'Nuestro Airbnb en Alfama estaba en un cuarto piso sin ascensor ni cafeterías cerca. Nos lo trajeron hasta la puerta. Desayunar en el balcón viendo Lisboa no tiene precio.',
      fr: 'Notre Airbnb à Alfama était au 4ème étage. Livraison directement devant la porte à notre réveil. Prendre le petit-déjeuner sur le balcon avec le jus frais était magique.',
      de: 'Unser Airbnb in Alfama lag im 4. Stock. Der Lieferservice hat alles bis an die Tür brought. Auf dem Balkon zu frühstücken war traumhaft!',
      it: 'Il nostro Airbnb ad Alfama era al 4° piano. Ci hanno consegnato la colazione direttamente alla porta. Mangiare sul balcone è stato fantastico!'
    }
  },
  {
    id: 'rev-3',
    author: 'Lukas & Hannah Weber',
    origin: 'Munich, Germany',
    accommodation: 'Boutique Hotel in Chiado',
    rating: 5,
    date: 'Junho 2026',
    comment: {
      en: 'Super smooth ordering on mobile! We ordered at 10 PM the night before and everything arrived fresh at 8:30 AM. High quality Bifana, Croquetes, amazing coffee and super friendly driver.',
      pt: 'Processo super simples no telemóvel! Encomendámos às 22:00 da noite anterior e chegou tudo fresco às 8:30. Bifana incrível, Croquetes e café espetacular.',
      es: '¡Proceso sencillísimo desde el móvil! Pedimos a las 22:00 de la noche anterior y llegó todo fresquísimo a las 8:30 AM. Gran calidad de productos.',
      fr: 'Rien a redire, commande hyper facile sur mobile ! Tout était ultra frais à 8h30. Les produits sont d’excellente qualité.',
      de: 'Sehr einfache Bestellung auf dem Smartphone. Am Vorabend um 22:00 Uhr bestellt, um 8:30 Uhr frisch geliefert. Erstklassige Qualität!',
      it: 'Ordinato dal telefono alle 22:00 della sera prima, consegnato freschissimo alle 8:30 AM. Cibo eccezionale e servizio impeccabile!'
    }
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: {
      en: 'When do I need to place my order?',
      pt: 'Quando preciso de fazer a minha encomenda?',
      es: '¿Cuándo debo realizar mi pedido?',
      fr: 'Quand dois-je passer ma commande ?',
      de: 'Wann muss ich bestellen?',
      it: 'Quando devo effettuare l’ordine?'
    },
    answer: {
      en: 'Orders must be placed by 23:00 (11:00 PM) on the day before your desired delivery date. This allows our bakery partners to prepare fresh breads and pastries early the next morning.',
      pt: 'As encomendas devem ser feitas até às 23:00 do dia anterior à data de entrega pretendida. Isso permite que a pastelaria prepare pão e bolos frescos de madrugada.',
      es: 'Los pedidos deben realizarse antes de las 23:00 del día anterior a la entrega para poder hornear todo fresco por la madrugada.',
      fr: 'Les commandes doivent être passées avant 23:00 la veille pour permettre la préparation fraîche le matin même.',
      de: 'Bestellungen müssen bis 23:00 Uhr am Vorabend aufgegeben werden, damit alles am frühen Morgen frisch gebacken werden kann.',
      it: 'Gli ordini devono essere effettuati entro le 23:00 del giorno precedente alla consegna.'
    }
  },
  {
    id: 'faq-2',
    question: {
      en: 'What are the delivery hours and time slots?',
      pt: 'Quais são os horários e janelas de entrega?',
      es: '¿Cuáles son los horarios de entrega?',
      fr: 'Quels sont les horaires de livraison ?',
      de: 'Wie sind die Lieferzeiten?',
      it: 'Quali sono gli orari di consegna?'
    },
    answer: {
      en: 'We deliver every morning between 08:30 and 13:30. During checkout, you can select your preferred 1-hour delivery window (e.g., 08:30–09:30, 09:30–10:30, etc.).',
      pt: 'Entregamos todas as manhãs entre as 08:30 e as 13:30. No checkout, pode escolher a sua janela de entrega de 1 hora preferida.',
      es: 'Entregamos todas las mañanas entre las 08:30 y las 13:30. Puedes elegir tu franja horaria preferida de 1 hora.',
      fr: 'Nous livrons chaque matin entre 08:30 et 13:30 par créneaux d’une heure.',
      de: 'Wir liefern jeden Morgen zwischen 08:30 und 13:30 Uhr in 1-stündigen Zeitfenstern.',
      it: 'Consegniamo ogni mattina tra le 08:30 e le 13:30 con finestre di 1 ora.'
    }
  },
  {
    id: 'faq-3',
    question: {
      en: 'Can I order to a hotel room or reception?',
      pt: 'Posso encomendar para um quarto de hotel ou receção?',
      es: '¿Puedo pedir para la habitación o recepción de un hotel?',
      fr: 'Puis-je me faire livrer à l’hôtel ou à la réception ?',
      de: 'Kann ich ins Hotelzimmer oder an die Rezeption bestellen?',
      it: 'Posso ordinare in hotel o alla reception?'
    },
    answer: {
      en: 'Yes! If your hotel allows guest room deliveries, our driver will bring it right to your door. If hotel security prefers reception drop-off, we will leave it at reception with your name and room number and text you instantly.',
      pt: 'Sim! Se o seu hotel permitir, entregamos à porta do quarto. Caso contrário, deixamos na receção identificada com o seu nome e avisamo-lo imediatamente.',
      es: '¡Sí! Entregamos en la puerta de tu habitación si el hotel lo permite, o bien en recepción con tu nombre e indicación de habitación.',
      fr: 'Oui ! Nous livrons directement à la porte de votre chambre ou à la réception selon les règles de votre hôtel.',
      de: 'Ja! Auf Wunsch liefern wir direkt an die Zimmertür oder hinterlegen es mit Ihrem Namen an der Rezeption.',
      it: 'Sì! Consegniamo alla porta della camera o alla reception in base alle regole dell’hotel.'
    }
  },
  {
    id: 'faq-4',
    question: {
      en: 'How does delivery to an Airbnb or apartment work?',
      pt: 'Como funciona a entrega num Airbnb ou apartamento?',
      es: '¿Cómo funciona la entrega en un Airbnb o apartamento?',
      fr: 'Comment fonctionne la livraison en Airbnb ou appartement ?',
      de: 'Wie funktioniert die Lieferung an ein Airbnb oder Apartment?',
      it: 'Come funktioniert die Lieferung an ein Airbnb oder Apartment?'
    },
    answer: {
      en: 'Enter your full street address, building door code or intercom instructions, and flat number. Our driver will ring your intercom or call your phone upon arrival.',
      pt: 'Indique a morada completa, código da porta ou número do intercomunicador. O estafeta toca à porta ou liga à chegada.',
      es: 'Indica la dirección completa, código de puerta o telefonillo y piso. El repartidor te avisará al llegar.',
      fr: 'Indiquez l’adresse, le digicode et le numéro d’appartement. Le livreur vous contactera dès son arrivée.',
      de: 'Geben Sie einfach die Adresse, den Tür-Code und die Wohnungsnummer an. Der Fahrer meldet sich bei Ankunft.',
      it: 'Inserisci indirizzo, codice portone e piano. Il corriere ti avviserà all’arrivo.'
    }
  },
  {
    id: 'faq-5',
    question: {
      en: 'Do I need to create an account to order?',
      pt: 'Preciso de criar conta para encomendar?',
      es: '¿Necesito crear una cuenta para hacer un pedido?',
      fr: 'Dois-je créer un compte pour commander ?',
      de: 'Muss ich ein Konto erstellen?',
      it: 'Devo creare un account per ordinare?'
    },
    answer: {
      en: 'No! You can order instantly using guest checkout in under 2 minutes. We only collect essential contact and delivery details.',
      pt: 'Não! Pode encomendar instantaneamente como convidado em menos de 2 minutos.',
      es: '¡No! Puedes pedir en menos de 2 minutos con el pago como invitado.',
      fr: 'Non ! Vous pouvez commander en quelques clics sans créer de compte.',
      de: 'Nein! Sie können in weniger als 2 Minuten direkt als Gast bestellen.',
      it: 'No! Puoi ordinare come ospite in meno di 2 minuti.'
    }
  }
];

export const LISBON_NEIGHBORHOODS = [
  'Alfama (CP 1100)',
  'Graça (CP 1170)',
  'Penha de França (CP 1170, 1900)',
  'Arroios (CP 1150, 1170)',
  'Santa Apolónia (CP 1100, 1900)',
  'São Vicente (CP 1100, 1170)',
  'Santa Clara (CP 1750)'
];

export const LISBON_DELIVERY_AREAS = [
  { name: 'Alfama', postalCodes: '1100' },
  { name: 'Graça', postalCodes: '1170' },
  { name: 'São Vicente', postalCodes: '1100, 1170' },
  { name: 'Santa Apolónia', postalCodes: '1100, 1900' },
  { name: 'Penha de França', postalCodes: '1170, 1900' },
  { name: 'Arroios', postalCodes: '1150, 1170' },
  { name: 'Santa Clara', postalCodes: '1750' }
];
