# Factory 54 task

This application consists of a React frontend for managing personal details and a .NET Core backend.

## Installation

### Prerequisites

- Node.js installed 
- npm (Node Package Manager) or yarn
- .NET Core SDK installed

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/your/repository.git
    ```

2. Navigate to the project directory:

    ```bash
    cd project-directory
    ```

3. Frontend Setup:

   #### React Frontend
    - Go to the frontend directory:

      ```bash
      cd client
      ```

    - Install frontend dependencies:

      ```bash
      npm install
      # or
      yarn install
      ```

4. Backend Setup:

   #### .NET Core server
    - Go to the server directory:

      ```bash
      cd server
      ```

    - Restore .NET dependencies:

      ```bash
      dotnet restore
      ```
## Database Setup

### SQL Database Configuration

1. **Prerequisites**
    - Ensure you have SQL Server installed or have access to a SQL Server instance.

2. **Database Creation**
    - Create a new database for the application. You can use SQL Server Management Studio or a similar tool to execute SQL commands.

```sql
    CREATE DATABASE YourDatabaseName;
```

### Connection String Configuration

In the appsettings.json file within the server directory, update the connection string under the ConnectionStrings section to reflect your SQL Server instance and the newly created database.

```
 "ConnectionStrings": {
    "MyDatabaseConnection": "Server=YourServer;Database=YourDatabase;User Id=YourUsername;Password=YourPassword;"
  }
```

### Applying Migrations

1. Ensure your database server is running and accessible.

2. In the server directory, apply the database migrations:

   ```bash
   dotnet ef migrations add InitialCreate
   dotnet ef database update
   ```

## Usage

### Running the Application

Start the .NET Core backend server:

```bash
dotnet run
```
Go back to the frontend directory if you're not already there:

```bash
cd ../client
```
Run the frontend:

```bash
npm start
# or
yarn start
```

### Features
- App.tsx: Main application file managing routes.
- PersonalDetailsForm.tsx: Component for filling personal details.
- PersonalDetailsView.tsx: Component to view personal details fetched from the .NET Core backend.
