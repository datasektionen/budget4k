FROM postgres:14.5

ADD init.sh /docker-entrypoint-initdb.d

RUN chmod a+r /docker-entrypoint-initdb.d/*