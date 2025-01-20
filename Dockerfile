# syntax=docker/dockerfile:1

FROM golang:1.20 AS builder

WORKDIR /app

COPY gospa/main.go .

RUN CGO_ENABLED=0 go build -ldflags "-s -w" -a -trimpath -o gospa main.go

FROM gcr.io/distroless/static:nonroot

COPY --from=builder /app/gospa gospa
COPY build web

ENTRYPOINT ["./gospa"]
