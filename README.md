# budget4k

Budgetsystemet fast i 4k!

## Environment

Döp om alla `.env.example` till `.env` och fyll i de fält som saknas.

## Running

Hämta `docker compose` [här](https://docs.docker.com/compose/install/).

*OBS: Följande är skrivet förutsett att du kör någon form av unixkommandotolk*.

För att köra:

```bash
docker compose up
```

För att komma åt databasen ifrån `psql`:

```bash
docker exec -it budget4k-db-1 psql -h localhost budget4k docker
```

För att seeda databasen:

```bash
docker exec -it budget4k-backend-1 yarn seed
```

Om du får problem med ägandeskap av `node_modules/` eller `dist/` kör:

```bash
sudo chown <ägare>:<grupp> <mappar>     # lägg till -R om du vill göra det rekursivt.
```

Om någonting krånglar testa ta bort `node_modules` och kör `docker compose up` igen.

Om inte det funkar kan man ta bort alla docker-containrar och volumes med kommandot:

```bash
# OBS: Komandot tar bort ALLA containrar och volumes!
docker rm $(docker ps -aq) && docker volume rm $(docker volume ls -q)
```
