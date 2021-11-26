import { Footer } from "./Footer"
import { Navbar } from "./Header"

export const Layout = ({children}) => {
	return (
		<>
			<Navbar />
			<div >
				{children}
			</div>
			<Footer />
		</>
	)
}
