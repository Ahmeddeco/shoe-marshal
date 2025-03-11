import React from 'react'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { dashboardCard } from '@/constants/dashboardCard'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default function DashboardPage() {
	return (
		<>
			{/* Cards */}
			<section className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 '>
				{dashboardCard.map(({ icon, iconColor, p1, p2, cardTitle }, i) => (
					<Card key={i}>
						<CardHeader className='flex flex-row items-center justify-between pb-2'>
							<CardTitle className='capitalize'>{cardTitle}</CardTitle>
							{React.createElement(icon, { size: 20, color: iconColor })}
						</CardHeader>
						<CardContent>
							<p className='text-2xl font-bold'>{p1}</p>
							<p className='text-xs text-muted-foreground'>{p2}</p>
						</CardContent>
					</Card>
				))}
			</section>
			{/* main section */}
			<section className='grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10'>
				{/* Right Card */}
				<Card className='xl:col-span-2'>
					<CardHeader>
						<CardTitle>Transactions</CardTitle>
						<CardDescription>
							Recent transactions from your store
						</CardDescription>
					</CardHeader>
				</Card>

				{/* Left Card */}
				<Card className='xl:col-span-1'>
					<CardHeader>
						<CardTitle>Recent Sales</CardTitle>
					</CardHeader>
					<CardContent className='flex flex-col gap-8'>
						{/* card item */}
						<div className='flex items-center gap-4'>
							<Avatar className='hidden sm:flex size-9 '>
								<AvatarFallback>JM</AvatarFallback>
							</Avatar>
							<div className='grid gap-1'>
								<p className='text-sm font-medium'>Jan Marshal</p>
								<p className='text-sm text-muted-foreground'>test@test.com</p>
							</div>
							<p className='ml-auto font-medium'>+$ 1,999.00</p>
						</div>
						{/* card item */}
						<div className='flex items-center gap-4'>
							<Avatar className='hidden sm:flex size-9 '>
								<AvatarFallback>JM</AvatarFallback>
							</Avatar>
							<div className='grid gap-1'>
								<p className='text-sm font-medium'>Jan Marshal</p>
								<p className='text-sm text-muted-foreground'>test@test.com</p>
							</div>
							<p className='ml-auto font-medium'>+$ 1,999.00</p>
						</div>
						{/* card item */}
						<div className='flex items-center gap-4'>
							<Avatar className='hidden sm:flex size-9 '>
								<AvatarFallback>JM</AvatarFallback>
							</Avatar>
							<div className='grid gap-1'>
								<p className='text-sm font-medium'>Jan Marshal</p>
								<p className='text-sm text-muted-foreground'>test@test.com</p>
							</div>
							<p className='ml-auto font-medium'>+$ 1,999.00</p>
						</div>
						{/* card item */}
						<div className='flex items-center gap-4'>
							<Avatar className='hidden sm:flex size-9 '>
								<AvatarFallback>JM</AvatarFallback>
							</Avatar>
							<div className='grid gap-1'>
								<p className='text-sm font-medium'>Jan Marshal</p>
								<p className='text-sm text-muted-foreground'>test@test.com</p>
							</div>
							<p className='ml-auto font-medium'>+$ 1,999.00</p>
						</div>
					</CardContent>
				</Card>
			</section>
		</>
	)
}
