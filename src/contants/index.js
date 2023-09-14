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