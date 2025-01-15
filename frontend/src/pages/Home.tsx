import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./Home.css"

function HomeAppTitle() {
	return (
		<h1 className="m-8 lg:m-16 xl:m-32 text-8xl sm:text-6xl xl:text-8xl">Plato</h1>
	)
}

export default function Home() {
	return (
		<div className="flex w-full min-h-screen">
			<div className="flex flex-col sm:flex-row sm:max-w-4/6 xl:max-w-1/2 mx-auto py-20 xl:py-32 justify-center items-center" id="Home_hero">
				<div className="leading-none">
					<HomeAppTitle />
				</div>
				<div className="flex items-center justify-center">
					<Card className="sm:mx-4 md:mx-8 lg:mx-12 xl:mx-16 w-4/5 sm:w-full">
						<CardHeader>
							<CardTitle>
								Transforming neighborhood co-op groceries
							</CardTitle>
							<CardDescription>
								A community software
							</CardDescription>
						</CardHeader>
						<CardContent>
							We combat the food oasis by connecting community centers with co-op initiatives to order shelf-stable necessities at wholesale prices
						</CardContent>
						<CardFooter>
							<div className="inline-flex mx-auto flex-col sm:flex-row items-center gap-4">
								<Link to="/shop">
									<Button>
										Shop Food <ChevronRight />
									</Button>
								</Link>
								<Link to="/map" className="hidden sm:block">
									<Button>
										Food Hubs Near You <ChevronRight />
									</Button>
								</Link>
							</div>
						</CardFooter>
					</Card>
				</div>

			</div>
		</div>
	)
}