import { PromptManagerDialog } from "./components/prompt-manager-dialog"

export default function Component() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Prompt Manager Demo</h1>
        <p className="text-muted-foreground">Click the button below to open the prompt manager dialog</p>
        <PromptManagerDialog />
      </div>
    </div>
  )
}
