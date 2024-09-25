// import {useState} from "react";

import {Button} from "@/components/ui/button.tsx";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import './App.css'
import {Label} from "@/components/ui/label.tsx";

function App() {
    // const [totalSpent, setTotalSpent] = useState(0);

    return (
        <main className="w-full h-screen p-0 flex justify-center items-center">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="amount">Amount</Label>
                                <Input id="amount" placeholder="Amount" type="number" min={1} max={9999}/>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="expense-type">Type</Label>
                                <Select>
                                    <SelectTrigger id="expense-type">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="food">Food 🍕</SelectItem>
                                        <SelectItem value="entertainment">Entertainment 🎬</SelectItem>
                                        <SelectItem value="travel">Travel 🏝️</SelectItem>
                                        <SelectItem value="accommodation">Accommodation 🏠</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Add</Button>
                </CardFooter>
            </Card>
        </main>
    );
}

export default App
