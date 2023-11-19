import React from 'react';

function App() {
  return (
    <div className="min-h-screen  bg-gray-100 flex items-center justify-center">
      <div className="max-w-full bg-white p-8 rounded-lg shadow-lg flex">
        <div className="w-1/2  p-4">
          <h1 className="text-3xl font-semibold mb-4">My Food Blog</h1>
          <p className="text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nisi sint corporis porro eius, omnis rerum facilis aut sit amet officiis, ipsum perspiciatis deserunt doloribus veritatis earum aliquid obcaecati in tempore ducimus dignissimos, laborum odio! Quos facere expedita iusto ut eligendi fugiat reiciendis beatae assumenda tempore blanditiis pariatur sapiente obcaecati aut cupiditate omnis, consectetur nisi molestiae ea explicabo magnam inventore iste. Quos expedita, placeat harum aspernatur provident ullam ex ipsum officia eveniet eum quo ut alias non fugit distinctio laborum voluptas quae! Eos, culpa nam. Itaque id dolore, iste voluptate fugit eos iusto dicta voluptatem, eaque ad repudiandae. Earum, suscipit.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&q=80&w=1900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your food image URL
          alt="Delicious Food"
          className="w-1/2  rounded-r-md"
        />
      </div>
    </div>
  );
}

export default App;
