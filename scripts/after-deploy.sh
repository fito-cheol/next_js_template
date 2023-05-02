#!/bin/bash
export LANG=en_US.UTF-8
export LANGUAGE=en_US.UTF-8


# get_current_directory() {
#     current_file="${PWD}/${0}"
#     echo "${current_file%/*}"
# }

# CWD=$(get_current_directory)
# echo "$CWD"

## ref: https://jay-ji.tistory.com/m/99
DOCKER_APP_NAME=next

# Blue 를 기준으로 현재 떠있는 컨테이너를 체크한다.
EXIST_BLUE=$(docker-compose -p ${DOCKER_APP_NAME}-blue -f docker-compose.blue.yaml ps | grep Up)
 
# 컨테이너 스위칭
if [ -z "$EXIST_BLUE" ]; then
    echo "blue up"
    docker-compose -p ${DOCKER_APP_NAME}-blue -f docker-compose.blue.yaml up -d
    BEFORE_COMPOSE_COLOR="green"
    AFTER_COMPOSE_COLOR="blue"
else
    echo "green up"
    docker-compose -p ${DOCKER_APP_NAME}-green -f docker-compose.green.yaml up -d
    BEFORE_COMPOSE_COLOR="blue"
    AFTER_COMPOSE_COLOR="green"
fi
 
# 새로운 컨테이너가 제대로 떴는지 확인
EXIST_AFTER=$(docker-compose -p ${DOCKER_APP_NAME}-${AFTER_COMPOSE_COLOR} -f docker-compose.${AFTER_COMPOSE_COLOR}.yaml ps | grep Up)
if [ -n "$EXIST_AFTER" ]; then
    
    # nginx.config를 컨테이너에 맞게 변경해주고 reload 한다
    # FIXME: 윈도우라 경로를 바꿔줌
    cd C:/nginx
    cp C:/nginx/conf/nginx.${AFTER_COMPOSE_COLOR}.conf C:/nginx/conf/nginx.conf

    # FIXME: nginx가 시작 안한경우 reload하면 에러가 발생
    nginx -s reload
    # 이전 컨테이너 종료
    # FIXME: 윈도우라 경로를 바꿔줌
    cd "C:/Users/dmsgh/OneDrive/문서/next_js_template"
    docker-compose -p ${DOCKER_APP_NAME}-${BEFORE_COMPOSE_COLOR} -f docker-compose.${BEFORE_COMPOSE_COLOR}.yaml down
    echo "$BEFORE_COMPOSE_COLOR down"
fi
 