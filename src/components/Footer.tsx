function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 mt-8">
      <div className="max-w-7xl mx-auto text-center text-sm">
        &copy; {new Date().getFullYear()} Meal Search. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer