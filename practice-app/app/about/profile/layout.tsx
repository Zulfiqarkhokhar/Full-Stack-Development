export default function profileLayout({children}:{ children: React.ReactNode}){
    return (
        <div>
            <h1>Hello From profile layout</h1>
            {children}
        </div>
    )
}