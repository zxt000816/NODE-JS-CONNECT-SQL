docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=zyf0706@." -p 1433:1433 -d mcr.microsoft.com/mssql/server:latest


docker exec -it 1500e75afd72 /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P zyf0706@.


docker exec -it 1500e75afd72 /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P zyf0706@. -d SampleDB -i ./CreateTestData.sql
