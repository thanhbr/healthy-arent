import imgSandwich from "../assets/images/food/sandwich.png"
import imgOrigiriRice from "../assets/images/food/origiri-rice.png"
import imgGuydon from "../assets/images/food/guydon.png"
import imgSoba from "../assets/images/food/soba.png"
import imgCurryRice from "../assets/images/food/curry-rice.png"
import imgHotDog from "../assets/images/food/hot-dog.png"
import imgChocolate from "../assets/images/food/chocolate.png"
import imgMeal from "../assets/images/food/meal.png"
import {ICON} from "../interface/icons"

export const navLinks = [
  {
    id: "home",
    title: "自分の記録",
    icon: ICON.memo
  },
  {
    id: "features",
    title: "チャレンジ",
    icon: ICON.challenge
  },
  {
    id: "product",
    title: "お知らせ",
    icon: ICON.info
  },
];

export const periods = [
  {
    id: 1,
    title: 'Morning',
    image: ICON.periodMorning
  },
  {
    id: 2,
    title: 'Lunch',
    image: ICON.periodMorning
  },
  {
    id: 3,
    title: 'Dinner',
    image: ICON.periodMorning
  },
  {
    id: 4,
    title: 'Snack',
    image: ICON.periodSnack
  },
]

export const foods = [
  {
    id: 1,
    name: 'Sandwich',
    period: periods[0].title,
    date: '05.21',
    image: imgSandwich
  },
  {
    id: 2,
    name: 'Onigiri rice ball',
    period: periods[1].title,
    date: '05.21',
    image: imgOrigiriRice
  },
  {
    id: 3,
    name: 'Gyudon rice',
    period: periods[2].title,
    date: '05.21',
    image: imgGuydon
  },
  {
    id: 4,
    name: 'Soba noodles',
    period: periods[3].title,
    date: '05.21',
    image: imgSoba
  },
  {
    id: 5,
    name: 'Sandwich',
    period: periods[0].title,
    date: '05.21',
    image: imgSandwich
  },
  {
    id: 6,
    name: 'Hot dog',
    period: periods[0].title,
    date: '05.20',
    image: imgHotDog
  },
  {
    id: 7,
    name: 'Curry rice',
    period: periods[1].title,
    date: '05.20',
    image: imgCurryRice
  },
  {
    id: 8,
    name: 'Soba noodles',
    period: periods[2].title,
    date: '05.20',
    image: imgChocolate
  },
  {
    id: 9,
    name: 'Ramen noodles',
    period: periods[3].title,
    date: '05.21',
    image: imgSoba
  },
  {
    id: 10,
    name: 'Japanese fried chicken',
    period: periods[0].title,
    date: '05.19',
    image: imgSoba
  },
  {
    id: 11,
    name: 'Hot pot Shabu',
    period: periods[3].title,
    date: '05.18',
    image: imgSoba
  },
  {
    id: 12,
    name: 'Gyutanyaki tongue',
    period: periods[2].title,
    date: '05.18',
    image: imgSoba
  },
]

export const mealOverview = {
  image: imgMeal,
  complete: 5,
  total: 21,
  percent: 75,
}

export const statisticalHeader = [
  {
    id: 1,
    title: 'BODY RECORD',
    languageJapan: '自分のカラダの記録'
  },
  {
    id: 2,
    title: 'MY EXERCISE',
    languageJapan: '自分の運動の記録'
  },
  {
    id: 3,
    title: 'MY DIARY',
    languageJapan: '自分の日記'
  },
]

export const statisticalBodyRecord = [
  {
    id: 1,
    labels: ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'],
    data: [39, 35, 30, 28, 23, 22, 20, 19,17,13,10,0],
    color: '#8FE9D0'
  },
  {
    id: 2,
    labels: ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'],
    data: [39, 37, 28, 32, 30, 27, 31, 26,25,24,23,25],
    color: '#FFCC21'
  },
]

export const statisticalMyExercise = [
  {
    id: 1,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 2,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 3,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 4,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 5,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 6,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 7,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 8,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 9,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 10,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 11,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 12,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 13,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 14,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 15,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 16,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 17,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 18,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 19,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 20,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 21,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
  {
    id: 22,
    title: '家事全般（立位・軽い)',
    caloConsumed: 26,
    time: 10,
  },
]

export const statisticalMyDiary = [
  {
    id: 1,
    date: '2021.05.21-23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    id: 2,
    date: '2021.05.21-23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    id: 3,
    date: '2021.05.21-23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    id: 4,
    date: '2021.05.21-23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    id: 5,
    date: '2021.05.21-23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    id: 6,
    date: '2021.05.21-23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    id: 7,
    date: '2021.05.21-23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    id: 8,
    date: '2021.05.21-23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    id: 9,
    date: '2021.05.21-23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    id: 10,
    date: '2021.05.21-23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    id: 11,
    date: '2021.05.21-23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
  {
    id: 12,
    date: '2021.05.21-23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
  },
]