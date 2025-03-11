import DashboardNavigation from '@/components/layout/admin/DashboardNavigation'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import {
	getKindeServerSession,
	LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/server'
import { CircleUserIcon, MenuIcon } from 'lucide-react'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const { getUser } = getKindeServerSession()
	const user = await getUser()

	if (!user || user.email !== process.env.ADMIN_EMAIL) {
		return redirect('/')
	}

	return (
		<section className='flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
			<header className='sticky top-0 flex h-16 z-50 items-center justify-between gap-4 border-b bg-white '>
				<nav className='hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
					<DashboardNavigation />
				</nav>
				<Sheet>
					<SheetTrigger asChild>
						<Button
							className='shrink-0 md:hidden'
							variant={'ghost'}
							size={'icon'}
						>
							<MenuIcon />
						</Button>
					</SheetTrigger>
					<SheetContent side={'left'}>
						<SheetTitle className='pb-4'>Navigation</SheetTitle>
						<Separator />
						<nav className='flex flex-col gap-6 text-lg font-medium mt-5'>
							<DashboardNavigation />
						</nav>
					</SheetContent>
				</Sheet>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant={'secondary'}
							size={'icon'}
							className='rounded-full'
						>
							<CircleUserIcon className='size-5' />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem asChild>
							<LogoutLink>Logout</LogoutLink>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</header>
			<main className='my-5'>{children}</main>
		</section>
	)
}
