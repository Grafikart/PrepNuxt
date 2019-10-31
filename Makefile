.PHONY: help
help: ## Affiche cette aide
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'


.PHONY: install
install: api/config/jwt/private.pem api/vendor api/node_modules web/node_modules ## Lance l'installation du projet

api/config/jwt/private.pem:
	openssl genpkey -out config/jwt/private.pem -aes256 -algorithm rsa -pkeyopt rsa_keygen_bits:4096
	openssl pkey -in config/jwt/private.pem -out config/jwt/public.pem -pubout

api/vendor:
	cd api
	composer i

api/node_modules:
	cd api
	yarn

web/node_modules:
	yarn
