import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddToDo from "./components/AddToDo";
import TodoList from "./components/TodoList";
import Auth from './components/Auth';
import ProctectedRoute from './components/ProctectedRoute';
import TodoNavbar from './components/TodoNavbar';
import { store } from '../store';
import { Provider } from 'react-redux';
import ProctectedAuth from './ProtectedAuth';


function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* Navbar is placed outside the Routes so it's always displayed */}
        <TodoNavbar /> 
        <div className="min-h-screen bg-gray-100 p-8">
          <Routes>
            {/* Auth Route */}
            {/* <Route path="/auth" element={<Auth />} /> */}


            <Route 
              path="/auth" 
              element={
                <ProctectedAuth>
                  <Auth />
                </ProctectedAuth>
              } 
            />

            
            {/* Protected Route for authenticated users */}
            <Route 
              path="/" 
              element={
                <ProctectedRoute>
                  <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">Todo App</h1>
                  <AddToDo />
                  <TodoList />
                </ProctectedRoute>
              } 
            />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
