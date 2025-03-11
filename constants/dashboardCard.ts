import { DollarSign, LucideIcon, PartyPopper, ShoppingBag, User2 } from "lucide-react"

type dashboardCardType = {
  cardTitle: string
  icon: LucideIcon
  iconColor: string
  p1: string
  p2: string

}


export const dashboardCard: dashboardCardType[] = [
  {
    cardTitle: 'Total Revenue',
    icon: DollarSign,
    iconColor: 'green',
    p1: '$100.00',
    p2: 'Based on 100 Charges',
  },
  {
    cardTitle: 'total sales',
    icon: ShoppingBag,
    iconColor: 'blue',
    p1: '+50',
    p2: 'total sales on shoeMarshal',
  },
  {
    cardTitle: 'total product',
    icon: PartyPopper,
    iconColor: 'magenta',
    p1: '37',
    p2: 'total products created',
  },
  {
    cardTitle: 'total users',
    icon: User2,
    iconColor: 'red',
    p1: '120',
    p2: 'total users signed up',
  },
]