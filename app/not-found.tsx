import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
	return (
		<section className='flex flex-col items-center gap-4 justify-center min-h-dvh'>
			<h2 className='text-4xl font-bold uppercase'>
				Not Found
			</h2>
			<p className='text-lg text-muted-foreground'>
				Could not find requested resource
			</p>
			<Button size='lg' asChild>
				<Link href='/'>Go Home</Link>
			</Button>
		</section>
	)
}
