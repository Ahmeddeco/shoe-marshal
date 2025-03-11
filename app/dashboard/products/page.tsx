import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { MoreHorizontal, PlusCircle, UserIcon } from 'lucide-react'
import Link from 'next/link'

export default function ProductsPage() {
	return (
		<>
			<div className='flex items-center justify-end'>
				<Button asChild>
					<Link href={'/dashboard/products/create'}>
						<PlusCircle />
						<span className=''>Add Product</span>
					</Link>
				</Button>
			</div>
			<Card className='mt-5'>
				<CardHeader>
					<CardTitle>Products</CardTitle>
					<CardDescription>
						Manage your products and view their sales perform
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Image</TableHead>
								<TableHead>Name</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Price</TableHead>
								<TableHead>Date</TableHead>
								<TableHead className='text-right'>Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>
									<UserIcon className='size-16' />
								</TableCell>
								<TableCell>Nike air</TableCell>
								<TableCell>Active</TableCell>
								<TableCell>$299.00</TableCell>
								<TableCell>15/06/2024</TableCell>
								<TableCell className='text-end'>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button size={'icon'} variant={'ghost'}>
												<MoreHorizontal className='size-4' />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align='end'>
											<DropdownMenuLabel>Actions</DropdownMenuLabel>
											<DropdownMenuSeparator />
											<DropdownMenuItem>Edit</DropdownMenuItem>
											<DropdownMenuItem>Delete</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</>
	)
}
