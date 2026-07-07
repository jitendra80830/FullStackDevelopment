package com.eazybytes.eazystore.scope;

import lombok.Getter;
import lombok.Setter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.RequestScope;

@Component
//@Getter
//@Setter
@RequestScope
public class RequestScopeBean {

    private static final Logger logger = LoggerFactory.getLogger(RequestScopeBean.class);

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public RequestScopeBean() {
        logger.info("Bean Initialised");

    }
}
