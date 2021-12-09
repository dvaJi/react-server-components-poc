export default function ServerInfo() {
  return (
    <div className="text-xl">
      Rendered at {new Date().toTimeString()} with Edge Middleware.
    </div>
  )
}