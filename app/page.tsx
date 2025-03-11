import { Button } from '@/components/ui/button'
import {
	RegisterLink,
	LoginLink,
	LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/components'

export default function HomePage() {
	return (
		<div className='h-screen flex items-center justify-center gap-4'>
			<Button asChild>
				<LoginLink>Sign in</LoginLink>
			</Button>
			<Button asChild>
				<RegisterLink>Sign up</RegisterLink>
			</Button>
			<Button asChild>
				<LogoutLink>Logout</LogoutLink>
			</Button>
		</div>
	)
}
